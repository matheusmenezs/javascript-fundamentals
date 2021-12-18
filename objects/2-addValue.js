const cliente = {
    nome: 'André',
    idade: 20,
    cpf: '12345678912',
    email: 'andre@email.com',
}

// add field
cliente.endereco = 'Rua Joao Aldano'
console.log(cliente)

//delete field
delete cliente.endereco
console.log(cliente)
