const carros = ['Fox', 'HB20S', 'FordKA', 'Siena',]
carros.pop()
console.log(carros)

carros.push('Polo')
console.log(carros)

carros.shift()
console.log(carros)

carros.unshift('Fox Xtreme')
console.log(carros)

carros.splice(0,1, 'Accord', 'Gol G8')
console.log(carros)

carros.splice(0,2)
console.log(carros)

carros.unshift('Logan')
carros.push('Sandeiro')

const algunsCarros = carros.slice(0,2)
console.log(algunsCarros)