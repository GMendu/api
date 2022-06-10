class Tabelas {
    init(conexao) {
        this.conexao = conexao
        this.CreateTableUsers()
        this.CreateTableCategoria()
    }
    CreateTableUsers(){
        const sql = 'CREATE TABLE usuario (usuario_id INT NOT NULL AUTO_INCREMENT, nomeUsuario varchar(100), login varchar(45), senha varchar(45), PRIMARY KEY(usuario_id))'
        this.conexao.query(sql, (erro) => {
            if(erro){
                console.log(erro)
            }
            else{
                console.log('Tabela usuario criada com sucesso')
            }
        })
    }
    CreateTableCategoria(){
        const sql = 'CREATE TABLE categoria (idcategoria INT NOT NULL AUTO_INCREMENT,nomeCategoria varchar(100), PRIMARY KEY(idcategoria))'
        this.conexao.query(sql, (erro) => {
            if(erro){
                console.log(erro)
            }
            else{
                console.log('Tabela categoria criada com sucesso')
            }
        })
    }
}
module.exports = new Tabelas