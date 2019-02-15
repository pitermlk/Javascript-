// FUNÇÕES CONSTRUTORAS 

function produto (nome, preco, desco) {

    this.nome = nome;
    this.getPrecoComDesconto = () => {

        const desconto = (preco * desco) / 100
        valor = preco - desconto

        return valor
    }
}

const p1 = new produto ('Notebook', 2000, 10)
console.log(p1.getPrecoComDesconto())


// ANOTAÇÃO LITERAL

const obj1 = {

    nome:'Pedro',
    CPF: '459.708.178.05',
    RG: '39.778.750.9',
    endereço: {

        rua:'Bristol',
        cidade: 'São - Paulo',
        CEP: '06823090',
        
    }


}

obj1.nome = 'Pedro Lacerda Sampaio'
console.log(obj1)
