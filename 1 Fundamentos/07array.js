var carro = ["Gol", "Fox", "Golf", "Jetta"]

console.log(carro[0])
console.log(carro[1])

console.log(carro[5] || carro[1])

carro[5] = "Tiguan"

console.log(carro[4] || carro[5])

console.log(carro.length)  // FUNÇÃO JAVASCRIPT PARA VERIFICA O TAMANHO DO ARRAY 

carro.push('City', 'Civic', 'HRV', 'Saveiro') // INSERE OBJETOS NO ARRAY 
carro.pop('Saveiro')

carro[4] = 'Touareg'

console.log(carro.length)
console.log(carro)

delete carro[1] // DELETE UM OBJETO EM UMA DETERMINADA POSIÇÃO DO ARRAY 
console.log(carro)

carro.pop(); // REMOVE O ULTIMO ELEMENTO INSERIDO DO ARRAY 
console.log(carro)

carro.pop();
console.log(carro)
