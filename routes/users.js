let NeDB = require('nedb');
let db = new NeDB({
    filename: 'users.db',
    autoload: true
});

module.exports = (app) => {
    app.get('/users', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');

        res.json({
            users: [{
                nome: 'Joao dos Santos',
                email: 'joao@gmail.com',
                id: 1
            },
            {
                nome: 'Maria dos Santos',
                email: 'maria@gmail.com',
                id: 2
            }]
        });
    });

    app.post('/users', (req, res) => {
        db.insert(req.body, (err, user) => {
            if (err) {
                console.log(`Error: ${err}`)
                res.status(400).json({
                    error: err
                });
            }else{
                res.status(200).json(user)
            }

        })
    });
}