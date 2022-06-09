module.exports = app => {
    app.get('/users', (req, res) => res.send('Rota GET de usuario estabelecida'))
    app.post('/users', (req, res) => {
        console.log(req.body)
        
        res.send('Rota GET de usuario estabelecida')
    })
}
