const nomes = ['Joao', 'Juliana', 'Ana', 'Caio', 'Guilherme']
                        //0             2   (nao inclui o ultimo indice)
const sala1 = nomes.slice(0, nomes.length/2)
const sala2 = nomes.slice(nomes.length/2)

console.log(sala1)
console.log(sala2)