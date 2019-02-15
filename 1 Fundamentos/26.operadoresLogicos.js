function compraVeiculo (constancia , foco) {

    const comprarTudo = constancia != foco
    const CNH = constancia || foco 
    const carro = constancia && foco 
    const teclado = constancia || foco 
    const dividas = constancia != foco 

    const bomHabitos = !comprarTudo // operador unario retorna o inverso do resultado  

    return {comprarTudo, CNH, carro, teclado, bomHabitos}

}

console.log(compraVeiculo(true, true))