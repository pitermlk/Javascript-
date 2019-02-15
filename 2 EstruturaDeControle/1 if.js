function resultadoProva (nota) {

    if (nota >= 7) {

        console.log("Voce atingiu a META, sua nota foi ".concat(nota));
    }
}

resultadoProva(7);
resultadoProva(5);

function retorneTrue(valor) {

    if (valor) {

        console.log('O resultado é verdadeiro')
    }

    
}

retorneTrue()
retorneTrue(null)
retorneTrue(undefined)
retorneTrue(NaN)
retorneTrue(0)
retorneTrue(-1)
retorneTrue(3)
