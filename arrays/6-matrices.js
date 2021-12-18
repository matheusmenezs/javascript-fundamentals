let idades = [30, 35, 28]
let nomes = ["Ana", "Juliana", "Leonardo"]
let faculdade = [false, true, true]

const funcionarios = [nomes, idades, faculdade]

for(let j=0; j<nomes.length; j++){
    let k = 0
    console.log(funcionarios[k][j], funcionarios[++k][j], funcionarios[++k][j])
}

