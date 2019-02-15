function MeuObjeto () {}

const obj1 = new MeuObjeto 
const obj2 = new MeuObjeto

MeuObjeto.prototype.nome = 'Anonimo'
MeuObjeto.prototype.falar = function () {
    console.log(`Boa Noite meu nome é ${this.nome}!`)
}

obj2.nome = 'Pedro'

obj1.falar()
obj2.falar()