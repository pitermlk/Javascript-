const pessoa = {

    nome: 'Pedro',
    idade: '21',
    nacionalidade: 'Brasileiro',
    NumeroCNH: '200897',
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))

Object.defineProperty(pessoa, 'dataNascimento', {

    enumerable:true, // PRORIEDADE QUE ACEITA SER LISTADA . 
    writable:false, // ACEITA MODIFICAÇÃO 
    value: '20/08/1997'// VALOR SETADO QUE NÃO PODE SER ALTERADO 

})

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))

