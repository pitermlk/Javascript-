const resultadoProva = function (nota) {

    switch(Math.floor(nota)) { // Esta definindo e tratando o valor recebido, 

        case 10:
        case 9:
        console.log('Quadro de Honra')
        break

        case 8:
        case 7:
        console.log("Aprovado")
        break

        case 6:
        case 5:
        console.log('Recuperação')
        break

        case 4:
        case 3:
        console.log("Reprovado")
        break

        default:
        console.log('Nota invalida')
    }
}

resultadoProva(4)
resultadoProva(10)
resultadoProva(9)
resultadoProva()