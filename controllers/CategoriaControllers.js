const categoria = require('../model/categoria')

module.exports = app => {
    app.get('/categoria', (req, res) => {
        categoria.listarcategorias(res)
    })

    app.get('/categoria/:id', (req,res) => {
        const id = parseInt(req.params.id)
        categoria.buscarPorId(id,res)
    })

    app.get('/categoria/:id', (req, res) => {
        const id= parseInt(req.params.id)

        categoria.buscarPorId(id, res)
        
    })
}