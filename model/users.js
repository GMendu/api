const conexao = require ('../config/conexao')

class Users {
    /* Refatorando o addUsers*/
    addUsers(usuario, res){
        const sql = 'INSERT INTO usuario SET ?'

        conexao.query(sql, usuario, (erro, resultados) => {

            if(erro){
                console.log(erro)
            } else {
                console.log(resultados)
            }
        })
    }

    listarUsuarios(res) {
        const sql = `SELECT * FROM usuario`

        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(404).json(erro)
            } else{
                res.status(200).json(resultados)
            }
        })
    }

    buscarPorId(id, res) {
        const sql = `SELECT * FROM usuario WHERE usuario_id=${id}`

        conexao.query(sql, (erro, resultados) => {
            const usuario = resultados[0]
            if(erro) {
                res.status(404).json(erro)
            } else{
                res.status(200).json(usuario)
            }
        })
    }
}

module.exports = new Users