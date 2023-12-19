function CalcularRetanguloArea(base, altura){
    let resposta = base * altura
    return resposta
}

function CalcularRetanguloPerimetro(comprimento, largura){
    let perimetro = 2*(comprimento+largura)
    // let resposta = 2*comprimento + 2*largura
    return perimetro 
}

let respostaArea = CalcularRetanguloArea(2,3)
let respostaPerimetro = CalcularRetanguloPerimetro(2, 3)
console.log(respostaArea, respostaPerimetro)