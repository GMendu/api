const customExpress = require('./infraestrutura/customExpress')
const conexao = require('./config/conexao')
const tabelas = require('./config/tabela')

conexao.connect(erro => {
    if(erro){
        console.log(erro)
    }else{
        console.log('conectado com sucesso')

        tabelas.init(conexao)
        const app = customExpress()
        const porta = 1337
        app.listen(porta, () => console.log('servidor rodando na porta '+porta))
    }
}
)


