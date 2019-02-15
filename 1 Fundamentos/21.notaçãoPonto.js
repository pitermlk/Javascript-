var VW = {}

VW.model = 'Fox'
VW.ano = '2019'
VW.motor = '2.0'


function Carro(VW) {

    this.VW = VW
}

const Carro1 = new Carro(VW)
console.log(Carro1.VW)
