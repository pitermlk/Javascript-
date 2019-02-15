class Lancamento {

    constructor (nome = 'Generico', valor = 0) {

        this.nome = nome
        this.valor = valor 
    }
}

class CicloFinanceiro {

    constructor (mes,ano) {

        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {

        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){

        let valorConsolidade = 0
        this.lancamentos.forEach(l => {
           valorConsolidade += l.valor

          
        })

        return valorConsolidade

        
    }


}

const salario = new Lancamento ('salario', 45000)
const ContaLuz = new Lancamento ('ContaLuz', -200)

const contas = new CicloFinanceiro(1,2019)
contas.addLancamentos(salario, ContaLuz)

console.log(contas.sumario())


