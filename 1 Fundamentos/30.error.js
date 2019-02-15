carro 

function tratarError(erro) {

    throw new Error (' Ocorreu um erro durante o processamento')
}

function imprimirNomeCarro() {

    console.log(carro)

  

        if (carro == undefined) {

            carro = 'Fox'

            console.log(carro)
            return carro
        }
 

}

imprimirNomeCarro()



