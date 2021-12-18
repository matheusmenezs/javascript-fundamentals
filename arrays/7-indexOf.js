listaNomes = ['Wendel', 'Marcos', 'Renan', 'Rodrigo']
listaNotas = [10, 9, 8, 7]

const search = (nome) => {
    if (listaNomes.indexOf(nome) != -1){
        let indice = listaNomes.indexOf(nome)
        return console.log(nome, listaNotas[indice])
    }
    else 
        return console.log(`Não encontra-se na lista`)
}

console.log(search('Renan'))