const moduloA = require('../../moduloA')
const moduloNome = require('../moduloNome')

console.log(moduloA.bemVindo)
console.log(moduloNome.nome)

const http = require('http')
http.createServer((req,res) => {
    res.write('Bom diaa')
    res.end()
}).listen(8080)
