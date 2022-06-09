const customExpress = require('./infraestrutura/customExpress')

const app = customExpress()


const porta = 1337
app.listen(porta, () => console.log('servidor rodando na porta '+porta))
