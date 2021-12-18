const cliente = {
    nome: 'André',
    idade: 20,
    cpf: '12345678912',
    email: 'andre@email.com',
}

//console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`)

//console.log(cliente.cpf.substring(0, 3))

const chaves = ['nome', 'idade', 'cpf', 'email']

chaves.forEach(i => console.log(cliente[i]))

