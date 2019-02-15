notas = [10, 6, 8, 10, 7, 8]

for (i in notas) {

    console.log(i, '=', +  notas[i])
}

const Carro = {

    modelo:'Fox',
    ano: '2019',
    motor: '2.0',
}

for (let atributo in Carro) {

    console.log(atributo + ' =', Carro[atributo]) 

}