
// SOMANDO OS ARGUMENTOS 
function soma () {

    soma = 0;
    for (i in arguments) {

        soma += arguments[i]
        
    }

    return soma 
}

console.log(soma(5, 6, 8, 10))