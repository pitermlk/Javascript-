function calculoParcela(quantidade, valor) {
    var parcela = quantidade * valor
    console.log(parcela)
}

calculoParcela(4,4000)

function carroModelo (modelo, ano) {

    carro = modelo + ano;

    return carro
}

console.log(carroModelo("Gol VW 2010 ", "1.0"))