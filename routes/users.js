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
}