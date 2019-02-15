const carro = {

    modelo: 'Renault Logan 1.6',
    ano: '2019',
    cor: 'Preto',
    proprietario: {
        nome: 'Pedro',
        idade: 21,
        endereco: {
            rua: 'Bristol ',
            numero: 537,
            cidade: 'São Paulo',
            CEP: 45970817805,
            

        }
        },

        viagens: [{
            
            origem:'São Paulo - SP',
            destino: 'Porto Seguro - BA'

        },
        {
            origem: 'São Paulo - SP',
            destino: 'Gramado - Rio Grande do Sul '
        },
        {
            origem: 'São Paulo - SP',
            destino: 'Campus do Jordão - SP'

        
        }],

        calcularValorViagem: function () {


        }
    }


    
carro.proprietario.endereco.numero = 537

console.log(carro)

delete carro.proprietario.endereco.numero


console.log(carro)
    
