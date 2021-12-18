// Adicionando valores ao vetor

let valores = [10, 6, 8]

const calculaMedia = (vetor) => {
    let soma = 0
    for (let pos in vetor){
        soma += vetor[pos]
    }
    return soma/vetor.length
}

const adicionaValores = (vetor, valor) => {
    vetor.push(valor)
}

console.log(calculaMedia(valores))

//Adicionando valores

adicionaValores(valores, 7)
console.log(calculaMedia(valores))