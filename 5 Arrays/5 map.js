const produtos = [
    '{"nome":"notebook","preco":2500}',
    '{"nome":"mouse razer","preco":250}'
]


const paraObj = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = produtos.map(paraObj).map(apenasPreco)
console.log(resultado)