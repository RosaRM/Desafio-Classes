class heroi {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar() {
    let arma
        if (this.tipo == "mago") {
            arma = "magia"
        } else if (this.tipo == "guerreiro") {
            arma = "espada"
        } else if (this.tipo == "monge") {
            arma = "artes marciais"
        } else if (this.tipo == "ninja") {
            arma = "shuriken"
        } 

        console.log(`O ${this.tipo} atacou usando ${arma}`)
    }


}


let Mago  = new heroi("Gandalf" , "524", "mago")
let Ninja = new heroi("Naruto" , "16" ,"ninja")
let Guerreiro = new heroi("Throfin" , "15" ,"guerreiro")
let Monge = new heroi("Aang" , "13" ,"monge")

Ninja.atacar();
Mago.atacar();
Monge.atacar();
Guerreiro.atacar();
