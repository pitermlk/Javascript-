const Carro = function (valor, qtParcela) {
    var valorPacercela = valor / qtParcela
    return valorPacercela
    
}

console.log(Carro(35000, 24))

const Veiculo = function (modelo, ano) {
    if (modelo != String) {

        [modelo] = [ano]
        return modelo
    }

    else {

        [ano] = [modelo]
        return ano
    }

}

console.log(Veiculo(2010,"Fox"))



