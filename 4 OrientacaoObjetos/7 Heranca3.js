const carro = { Fabricante: 'Volkswagem', motor: '2.0', cor: 'branco', ano: '2019', valor: 35000}

const fox = Object.create(carro)

fox.cor = 'Preto'

console.log(fox)

const civic = Object.create(carro)

civic.fabricante = 'Honda'

console.log(civic)
console.log(civic.cor)

const SandeiroRS = Object.create(carro, {

    fabricante: { value: 'Renault', writable:false, enumerable: true}
    })


console.log(Object.keys(fox))
console.log(Object.keys(civic))

for(let key in fox) {

    fox.hasOwnProperty(key) 
    console.log(key)
}