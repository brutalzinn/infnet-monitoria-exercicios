const EscreveNomeIdade = (nome, idade) => {
    let resultado = `nome:${nome}, idade:${idade}`
    return resultado
}

let resposta = EscreveNomeIdade("alfredo", 13)
console.log(resposta)