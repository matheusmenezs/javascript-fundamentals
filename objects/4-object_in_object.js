const cliente = {
    nome: 'André',
    idade: 20,
    cpf: '12345678912',
    email: 'andre@email.com',
    telefone: ["88224363", "99887755", "99123456"],

    dependente: [{
        parentesco: 'Filha',
        nome: 'Maria',
        idade: 19,
        telefone: ["99224363", "98988745", "91285825"] 
    }]
}

//cliente.telefone.forEach((tel) => console.log(tel))

//console.log(cliente)

cliente.dependente.push({parentesco: 'Filho',
                        nome: 'Joao',
                        idade: 17,
                        telefone: ["99224363", "98988745", "91285825"] })

console.log(cliente.dependente.filter((dependente, indice) => dependente.idade >= 19))