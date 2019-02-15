// criação de forma literal
function modeloCarro(){
    
}

// armazenar em uma variavel 

const modeloCarro2 = function () {


}

// Armazenar em um array 

const modelosCarros3 = [function (Modelo1, Modelo2) { return Modelo1}, modeloCarro, modeloCarro2]
console.log(modelosCarros3[0]('Gol', 'Fox'));




// Armazenar em um atributo de um objeto 
const carro = {}
carro.ligar = function () {

    return 'Ligado'
}

console.log(carro.ligar())




// Passar função como parametro 
function veiculo (farol) {

    farol()
    
}

veiculo(function () { console.log('Farol ligado')})


// função pode retornar ou passar uma função em um parametro.

function soma (a, b) {

    return function (c) {
 
        console.log(a + b + c)
    }
}

soma (2,4)(5)
