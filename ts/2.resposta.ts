class Pessoa {
    documento : string
    readonly nome : string
    idade :number 

    constructor(documento: string, nome: string, idade: number){
        this.documento = documento
        this.nome = nome 
        this.idade = idade
    }
}

let pessoa = new Pessoa("123132", "Roberto", 18)

