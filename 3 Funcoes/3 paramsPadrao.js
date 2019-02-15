// PODEMOS PADRONIZAR OS PARAMETROS DE UMA FUNÇÃO, TRATANDO AS MESMAS NA FUNÇÃO. 

function Veiculos (a, b, c ) {

    a = a || 1
    b = b || 1 
    c = c || 1 

    return a + b + c 
} 

console.log(Veiculos())