const carro = {}

carro.modelo = 'Fox'
carro.ano = '2019'
carro.motor = '1.6'
carro.valor = 35000
carro.cor = 'Branco'
carro.versão = 'Rock in Rio'


console.log(carro)


const { modelo, ano } = carro // DESTRUCTURING 

console.log(modelo, ano)

const { versão: {status = 'Disponivel', tipo = 'Novo' }} = carro // DESTRUCTURING

console.log(status,tipo) 

const { versão: {data_lançamento}} = carro // DESTRUCTURING

console.log(data_lançamento)