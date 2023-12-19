const EscreveNomeEIdade = (nome:string, idade:number) : string =>{
    let resultado: string = `nome:${nome}, idade:${idade}`
    return resultado
}

let resultado1 : string = EscreveNomeEIdade("Alfredo", 18)
console.log(resultado1)