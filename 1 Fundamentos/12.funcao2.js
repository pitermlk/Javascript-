const financiamento = function(parcela, valor) { // ARMAZENANDO VARIAVEL EM UMA FUNÇÃO. 
    console.log(parcela * valor)
}

financiamento(3,4000)

const consorcio = (parcela, valor) => { // FUNÇÃO DO TIPO ARROW 
    return parcela * valor 
}

console.log(consorcio(4,5000)) 

const Avista = (valor,desconto) => valor - desconto // FUNCAO COM RETORNO IMPLICITO 

console.log(Avista(30000, 3000))