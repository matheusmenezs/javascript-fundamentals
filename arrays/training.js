//training methods of arrays

const salaJs = [10, 9, 8, 7, 6]
const alunosJS = ['Matheus', 'Renan', 'Marcos', 'Wendel']

//Slice: particiona o array -> Retorna um array (Cópia)

const salaA = salaJs.slice(0, 3)
const salaB = salaJs.slice(3, 5)

//console.log(`Sala A: ${salaA} | Sala B: ${salaB}`)

//Splice: Retorna os elementos removidos | Altera o Array

const salaC = salaJs.splice(0, 0)
//console.log(salaC)
//console.log(salaJs)

//ForEach: usa uma função callback uma vez para cada elemento do array  | Retorna Undefinid | Altera o array

salaJs.forEach((nota, index) => salaJs[index] = ++nota)
console.log(salaJs)

// Map: usa uma função callback uma vez para cada elemento do array | Retorna copia do array modificada | Nao altera array
const notasAt = salaJs.map((nota) => ++nota)

console.log(notasAt)
console.log(salaJs)


//Filter:  cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

const alunoMax = alunosJS.filter((nota, index) => salaJs[index] > 10)
console.log(alunoMax)


// educe: reduz a um unico valor
const retorno = salaJs.reduce((acum, nota) => acum + nota, 0)
console.log(retorno)
