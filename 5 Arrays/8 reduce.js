const alunos = [
    {nome:'Pedro', nota:10, bolsista:true},
    {nome:'Tsubasa', nota:8, bolsista:false},
    {nome:'Naruto', nota:8, bolsista:false},
    {nome:'Rivaldo', nota:7, bolsista:true}
]

const alunoBolsista = aluno => aluno.bolsista == true

// FILTRE FILTREI ALUNO SE ELE É BOLSISTA 
// MAP CRIAR UM NOVO ARRAY APENAS COM OS ALUNOS QUE SÃO BOLSISTAS 
// REDUCE SOMEI TODOS OS ALUNOS QUE SÃO BOLSISTAS . 

// ALUNOS BOLSISTAS 

const bolsistas = alunos.filter(alunoBolsista).map(a => a.bolsista).reduce(function(total,atual){
    return total + atual
    
})

console.log(bolsistas)

// ALUNOS NÃO BOLSISTAS 

const alunoNaoBolsista = aluno => aluno.bolsista == false

const nBolsistas = alunos.filter(alunoNaoBolsista).map(a => a.bolsista).reduce(function(total,atual){
return total + atual
    
})

console.log(nBolsistas)