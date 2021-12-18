// aplicando forEach (Para cada)

const notas = [10, 6.5, 8, 7.5];

let soma = 0;

// callback
notas.forEach(nota => {
    soma += nota
})

//notas.forEach(function(nota){
//    soma += nota
//})

let media = soma/notas.length

console.log(media)