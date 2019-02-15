/*
* usando a variavel LET não conseguimos declarar a mesma mais de uma vez, pois a mesma gera um conflito.
*
*/

var a = 3;
let b = 3;


a = "i30";
b = "Fox";

console.log(a, b);
console.log(b);

/*
* quando usamos uma viriavel do tipo const, não conseguimos atribuir novos valores a mesma. 
* tambem não conseguimos declara novamente a variavel. 
*/

const c = "Gol";


console.log(c);

