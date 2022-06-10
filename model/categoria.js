const conexao = require ('../config/conexao')

class Categoria {
    addCategoria(categoria, res) {
        const sql = `INSERT INTO categoria SET ?`
        conexao.query(sql, categoria, (erro, resultados) => {
            if (erro) {
                console.log(erro)
            } else{
                console.log(resultados)
            }
        })
    }

    listarcategorias(res){
        const sql = `SELECT * FROM categoria`

        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    buscarPorId(id, res) {
        const sql = `SELECT * FROM categoria WHERE  categoria_id=${id}`

        conexao.query(sql, (erro, resultados) => {
            const categoria = resultado[0]
            if(erro) {
                res.status(400).json(erro)
            } else{
                res.status(200).json(categoria)
            }
        })
    }
}