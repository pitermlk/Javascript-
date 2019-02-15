const carros = [
    {nome: 'Fox', valor: 38000},
    {nome: 'Sandeiro', valor: 45000},
    {nome: 'HB20S', valor: 50000},
    {nome: 'Logan', valor: 30000}

]

const valores = carros.map(a => a.valor)
console.log(valores)

const somaValores = carros.map(a => a.valor).reduce(function(total,valores){
    console.log(total,valores)
    return total + valores
})

console.log(somaValores)


