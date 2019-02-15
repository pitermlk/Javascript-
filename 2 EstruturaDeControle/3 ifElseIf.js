const position = function rankeamento(pontuacao) {

    if (pontuacao == 1000) {

        console.log(' Seu Elo é Desafiante')
    }

    else if (pontuacao > 700 && pontuacao < 1000 ) {

        console.log ('Seu Elo é Diamante')
    }

    else if (pontuacao > 600 && pontuacao < 700 ) {

        console.log ('Seu Elo é Platina')
    }

    else if (pontuacao > 500 && pontuacao < 600 ) {

        console.log (' Seu Elo é de Gold  ')
    }

    else {

        console.log (' Seu Elo é Prata')
    }
}

position(1000)
position(700)
position(600)
position(500)