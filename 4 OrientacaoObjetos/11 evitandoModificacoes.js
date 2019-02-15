const produt = Object.preventExtensions({ // CRIANDO UM OBJETO QUE RESTRINGE ATRIBUIÇÕES.

    nome: 'Pedro',
    preco: '1.99',
    codigo: '001'
})


const pessoa = { 
    nome:'Pedro',
    CPF: '459.708.178.05',
}

Object.seal(pessoa)

pessoa.nome = 'Pitermlk'
pessoa.CPF = '459.708.178.05'

console.log(pessoa)