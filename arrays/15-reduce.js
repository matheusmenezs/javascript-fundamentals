const notasJs = [10, 9, 8, 7, 6]
const notasPy = [6, 7, 8, 9, 10]
const notasC = [5, 6, 7, 8, 9]

const mediaSala = (notasDaSala) => {
    const somaDasNotas = notasDaSala.reduce((acum, atual) => atual + acum, 0)
    return somaDasNotas/notasDaSala.length
}

console.log(`Média da sala de Js = ${mediaSala(notasJs)}`)