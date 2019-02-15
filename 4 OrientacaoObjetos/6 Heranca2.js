// CADEIA DE PROTOTIPOS 

Object.prototype.attr0 = '0'
const avo = { attr1 : 'A'}
const pai = {__proto__:avo, attr2 : 'B', attr3 : '3'}
const filho = {__proto__:pai, attr3: 'C'}

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)


const carro = {

    velAtual: 0,
    velMax: 300,
    acelerarMais(delta) {

        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        }
        else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}km\h de ${this.velMax} km\h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax:'324',
}

const volvo = {
    modelo: 'V40',
    status () { // SHADOWING 
        return `${this.modelo}: ${super.status()}` // SUPER REFERENCIA O OBJETO DO PROTOTIPO 
    }
}

Object.setPrototypeOf(ferrari,carro) // OBJETO / PROTOTIPO 
Object.setPrototypeOf(volvo,carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(120)
ferrari.acelerarMais(100)
console.log(volvo.status())
console.log(ferrari.status())


