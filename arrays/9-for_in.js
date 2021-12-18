// Média de itens com For

const notas = [10, 6.5, 8, 7.5]

let somaNotas = 0 


const calculaMedia = (notas) => {
    for (item in notas){
        somaNotas += notas[item]
    }
    return somaNotas/notas.length
}

console.log(calculaMedia(notas))