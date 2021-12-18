const cliente = {
    nome: 'André',
    idade: 20,
    cpf: '12345678912',
    email: 'andre@email.com',
    telefone: ["88224363", "99887755", "99123456"],

    dependentes: [{
        parentesco: 'Filha',
        nome: 'Maria',
        idade: 19,
        telefone: ["99224363", "98988745", "91285825"] 
    }],

    saldo: 100,

    depositar: (valor => cliente.saldo += valor)
}


const funcao = (obj => {
    const chaves = Object.keys(obj)

    if (chaves.includes("dependentes")){  //Método Includes
        console.log(obj.nome)
    }
})

funcao(cliente)


//Object.keys()   -> Pega as chaves
//Object.values()  -> Pega os valores
//Object.entries()  ->  Retorna Arrays: Chave | Valor
