// JSON É UM FORMATO DE DADOS , USAMOS PARA CARREGAR INFORMAÇÕES DE UM SISTEMA PARA OUTRO. 

const produto = {

    nome:'Notebook',
    valor:'2000',
    codigo: '001',
}

console.log(JSON.stringify(produto)) // CONVERTENDO OBJETO PARA JSON 

console.log(JSON.parse('{ "nome" :"Pedro", "CPF": "45970817805"}')) // CONVERTENDO JSON PARA OBJETO 


// CONVERTENDO JSON PARA OBJETO (ARRAY E OBJETO)
console.log(JSON.parse('{"nome":"Pedro", "Status": true, "Notas":[1,2,3,4], "Materiais": {"Caneta":"Azul"}}'))


