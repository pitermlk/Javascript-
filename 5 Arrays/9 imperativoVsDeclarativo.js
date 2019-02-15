const alunos = [
    {nome:'Pedro', nota: 8},
    {nome:'Naruto', nota: 10},
    {nome:'Sasuke', nota: 7}
]

// IMPERATIVO 



// DECLARATIVO 

const getNota = aluno => aluno.nota
const soma = (total,atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2)