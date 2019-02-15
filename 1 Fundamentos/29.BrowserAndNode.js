var garrafa = 'black skull'



garrafa = {

    cor: 'preta',
    capacidade: '500 ml', 
    status: function() { // O OBJETO POSSUI UM ATRIBUTO QUE É UMA FUNÇÃO .

        return 'a garrafa esta aberta'
    } 
 
}

console.log(garrafa.status())

this.c = '600'
this.d = '700'

console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports.d)
console.log(module.exports)