// função declarada
function soma (a,c) {

    return a + c
}


// expressão que possui uma função 
const divisao = function (valor , dividendo) {

    return valor - dividendo
}


// função nomeada com o nome o mesmo nome da expressao 
const mult = function mult (valor, multiplicador) {

    return valor * multiplicador
}

console.log(soma(3,6))
console.log(divisao(10,2))
console.log(mult(5,5))