// Calcula a média de valores armazenados em um vetor
let valores = [10, 6.5, 8, 7.5]
let soma = 0

for (let pos in valores){
    soma += valores[pos]
}
let media = soma/valores.length
console.log(media)