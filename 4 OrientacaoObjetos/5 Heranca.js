
const fox = { 

    modelo: 'Fox Rock in Rio',
    velMax: 220,
}

const sandeiro = {

    modelo: 'Sandeiro RS',
    velMax: 220, 
}

console.log(fox.__proto__)
console.log(fox.__proto__ === Object.prototype)
console.log(sandeiro.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)