const Veiculo = function (modelo) {
    
    // CONDICIONAL  condição ? true : false   
    nome = modelo == 'Fox' ? modelo.concat('VW') :  modelo.concat('Outro')
    
    return nome
} 

console.log(Veiculo(''))