// SINTAXE FUNÇÃO IMEDIATA 

//(function(){})();

const Pessoa = function (nome, idade, RG, CPF) {

    this.informações = function () {

        const dados = {

            nome,
            idade,
            RG,
            CPF,
        }

        console.log(dados)
    }

    
}

const p1 = new Pessoa('Pedro', '21', '397787509', '45970817805')
p1.informações()



(function(){

    console.log('Sandeiro RS')

})()