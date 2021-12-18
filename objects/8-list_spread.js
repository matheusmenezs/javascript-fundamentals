// Lista de Objetos

const clientes = [
    {
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
        },

        {
            parentesco: 'Filho',
            nome: 'Joao',
            idade: 20,
            telefone: ["99224363", "98988745", "91285825"]
        }
        ]
    },

    {
        nome: 'Zé',
        idade: 20,
        cpf: '12345678912',
        email: 'ze@email.com',
        telefone: ["88224363", "99887755", "99123456"],

        dependentes: [{
            parentesco: 'Filha',
            nome: 'Ana',
            idade: 23,
            telefone: ["99224363", "98988745", "91285825"]
        },

        {
            parentesco: 'Filho',
            nome: 'John',
            idade: 17,
            telefone: ["99224363", "98988745", "91285825"]
        }
        ]
        
    }
]
let listaDependentes = []
clientes.forEach((item, index)=> {
    listaDependentes = (clientes[index].dependentes)
    console.table(listaDependentes)
})

//const listaEspalha = [...clientes[0].dependentes, =...clientes[1].dependentes]   //Operador de espalhamento