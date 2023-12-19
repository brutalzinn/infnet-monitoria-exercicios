class PessoaModel {
    documento : string
    nome : string
    idade :number 

    constructor(documento: string, nome: string, idade: number){
        this.documento = documento
        this.nome = nome 
        this.idade = idade
    }

    mudarNome(novoNome: string){
        this.nome = novoNome
    }
}


function ExibirIdadePessoa(pessoa : PessoaModel){
    let idade = pessoa.idade
    return idade
}

let pessoaVariavel = new PessoaModel("16324", "Robert", 18)
const resultado3 = ExibirIdadePessoa(pessoaVariavel)
console.log(resultado3)