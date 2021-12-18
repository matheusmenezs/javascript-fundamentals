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
    }],

    saldo: 100,

    depositar: (valor => cliente.saldo += valor)
}

let relatorio = ""

for(info in cliente){
    if(typeof cliente[info] == 'string')
    relatorio += `${info} -> ${cliente[info]} \n`
}

console.log(relatorio)