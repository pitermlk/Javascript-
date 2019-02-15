function criarProduto (nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

criarProduto('Camiseta El Shaday - Black', 20.00)
criarProduto('Pulseira Soul - Jesus ', 10.00)

console.log(criarProduto())

