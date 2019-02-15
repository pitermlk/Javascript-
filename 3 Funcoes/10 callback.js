const listaCarros = ['Fox', 'Jetta', 'Civic', 'EcoSport']

listaCarros.forEach(function(listaCarros) { // FUNÇÃO CALLBACK 

    console.log(listaCarros)
})



const notas = [5.2,6.5,3.7,6.4,7.6,9.4,7.7,8.5]
const notasBaixas = notas.filter(notas => notas < 7) // FUNÇÃO CALLBACK // FUNÇÃO ARROW 
console.log(notasBaixas)


//EXEMPLO CALLBACK NO BROWSER 

document.getElementsByTagName('body')[0].onclick = function(e) {

    console.log('O evento ocorreu')
}


