const produtos = [
    { nome: 'Notebook', preco: '2500'},
    { nome: 'Mouse Razer', preco: '250'},
    { nome: 'Teclado Razer', preco: '300'}

]


const caro = produto => produto.preco > 2000
const barato = produto => produto.preco < 300 


console.log(produtos.filter(caro))
console.log(produtos.filter(barato))

