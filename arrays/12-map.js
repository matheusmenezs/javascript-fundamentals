const notas = [10, 9, 8, 7, 6]
//map retorna array com os novos valores
const notasAtualizadas = notas.map(nota =>
    nota == 10? nota: ++nota)

console.log(notasAtualizadas)

