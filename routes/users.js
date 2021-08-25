const { request } = require('express');
let NeDB = require('nedb');

//criando uma instacia e definindo o nome do arquivo que sera salvo os dados
let db = new NeDB({
    filename: 'users.db',
    autoload: true
});

module.exports = (app) => {

    // configurando rota padrão
    let route = app.route('/users')

    // configurando rota procurar por id
    let routeId = app.route('/user/:id')

    route.get((req, res) => {
        db.find({}).sort({ name: 1 }).exec((err, users) => {
            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json({ users });
            }
        })
    });

    route.post((req, res) => {
        db.insert(req.body, (err, user) => {
            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(user)
            }

        });
    });

    routeId.get((req, res) => {
        const { id } = req.params;

        db.findOne({ _id: id }).exec((err, user) => {
            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(user)
            }
        });
    });

    routeId.put((req, res) => {
        const { id } = req.params;
        db.update({ _id: id }, req.body, err => {
            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(Object.assign(req.body, req.params))
            }
        });
    });

    routeId.delete((req, res) => {
        const { id } = req.params;
        db.remove({ _id: id }, {}, err => {
            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(id)
            }
        });
    });

}