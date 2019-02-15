function getPreco (valor = 0, moeda = 'R$') {

    return `${moeda} ${this.valor}`
}

const produto =  {

    nome: 'Notebook',
    valor: '2500.00',
    marca: 'Dell',
    getPreco
}

global.valor = '20.00'


console.log(getPreco())
console.log(produto.getPreco())


const carro = {valor:28000}

console.log(getPreco.call(carro))
console.log(getPreco.call(carro, 20000))