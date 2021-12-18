function cliente(nome, idade, cpf, saldo){

    this.nome = nome
    this.idade = idade
    this.cpf = cpf
    this.saldo = saldo

    function depositar(valor){
        this.saldo += valor
    }
}

function clientePoupanca(nome, idade, cpf, saldo, saldoPoup){
    cliente.call(this, nome, idade, cpf, saldo)
    this.saldoPoup = saldo
}

const user = new cliente("Matheus", "23", "1234565789", 1000)
console.log(user)

const userPoup = new clientePoupanca("Leticia", "20", "987456123", 100, 300)
console.log(userPoup)

clientePoupanca.prototype.depositarPoup = function(valor){ //nova funcao ao prototipo
    this.saldoPoup += valor
}

userPoup.depositarPoup(400)
console.log(userPoup)
