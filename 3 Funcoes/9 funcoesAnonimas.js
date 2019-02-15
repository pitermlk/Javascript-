function versao () {

    lancamento = 2019

    return lancamento 
}


const Veiculo = function (nome, modelo, ano = versao) {

    console.log(nome + modelo + ano)
}

Veiculo('Fox', 'VW')

const pessoa = {

    ligar : function (status) {

        if (status === 'Ligado') {

            console.log('O carro esta ligado')
            return status 
        }

        else {

            console.log('O carro esta desligado')
            return status 
        }
    }
}

pessoa.ligar('Ligado')


const Tv = status => {

    if (status === 'Ligado') {

        console.log('Tv esta ligada ')
    }

    else {

        console.log('Tv esta desligada')

    }

        
}

Tv('Ligado')
Tv('Desligado')