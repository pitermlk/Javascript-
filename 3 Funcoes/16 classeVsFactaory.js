class Carro { // CLASSE 

    constructor(modelo) {

        this.modelo = modelo 
    }

    informacoes () {

        console.log(" Modelo: ".concat(this.modelo))
    }
}




const Carro1 = new Carro('Fox')
Carro1.informacoes()














const Carro2 = modelo => { // FUNÇÃO 

    return {

        informacoes: () => console.log(" Modelo: ".concat(modelo))
    }
}

const C1 = Carro2('Fox')
C1.informacoes()