module.exports = {
    // criando função para tratar error nas rotas
    send: (err, req, res, code = 400) => {
        console.log(`Error: ${err}`)
        res.status(code).json({
            error: err
        });
    }
}