
let valores = [10, 7, 8, 7]
let outros = [9, 5, 6]

const calculaMedia = (vetor) => {
    let soma = 0
    for (let pos in vetor){
        soma += vetor[pos]
    }
    return soma/vetor.length
}

console.log(calculaMedia(valores))

//Renovendo o ultimo elemento

valores.pop()
console.log(calculaMedia(valores))

//Concat() concatena valores de dois vetores
let concatenacao = valores.concat(outros)
console.log(concatenacao)

//Filter() retorna os valores com base numa função
const cond = (values) => {
    return values >= 7
}
let retorno = valores.filter(cond)
console.log(retorno)

//Find() retorna apenas o primeiro valor que satisfazer o teste (função)
let busca = valores.find(cond)
console.log(busca)

//findIndex() Funciona igual o find, mas retorna o índice em vez do elemento, possibilitando usá-lo em outras partes do código.
let buscaIndex = valores.findIndex(cond)
console.log(buscaIndex)  

//indexOf() Localiza e retorna o índice referente a primeira ocorrência
let index = valores.indexOf(7)
console.log(index)

//lastIndexOf() Retorna o índice referente à última ocorrência de um valor em um array: varre de trás pra frente.
let last = valores.lastIndexOf(7)
console.log(last)

//forEach() Executa uma função em cada elemento do array de forma individual.