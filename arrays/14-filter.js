//método filter
const nomes = ['Ana', 'Marcos', 'Leticia', 'Matheus']
const notas = [10, 5, 6, 7]

const resultado = nomes.filter((aluno, indice) => 
    notas[indice] <= 5)

console.log(resultado)