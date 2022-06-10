const users = require('../model/users')

module.exports = app => {
    app.get('/users', (req, res) => {
        users.listarUsuarios(res)
    })
    
    app.get('/users/:id', (req, res) => {
        const id = parseInt(req.params.id)
        users.buscarPorId(id, res)
    })

    app.post('/users', (req, res) => {
        const usuario = req.body
        users.addUsers(usuario)
        res.send('Rota GET de usuario estabelecida')
    })
}
