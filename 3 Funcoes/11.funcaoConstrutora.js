
// FUNÇÃO CONSTRUTORA 
function Carro (velocidadeMaxima = 200, delta = 5) {    
    let velocidadeAtual = 0;
    var farol = true;


    // FUNÇÃO PARA ACELERAR 
    this.acelerar = function () {

        if (velocidadeAtual < velocidadeMaxima) {

            velocidadeAtual += delta

        }

        else {

            velocidadeAtual = velocidadeMaxima
        }
    }

    this.freiar = function (velocidadeReduzida) {

        if (velocidadeAtual <= velocidadeReduzida ) {

            
            velocidadeAtual = velocidadeAtual;
           

       }
            
        
       else {

        velocidadeAtual = velocidadeAtual - velocidadeReduzida
           
       }

        }


    this.farol = function (farol) {

        if (farol == true) {

            console.log("Farol esta ligado")
        }

        else {

            console.log("Farol esta desligado")
        }
    }


                // FUNÇÃO PARA RETORNA VELOCIDADE ATUAL 
                this.getVelocidadeAtual = function () {

                    return velocidadeAtual
                }

                this.getFarolStatus = function () {

                    return farol
                }

            

}



    const gol = new Carro()

    gol.acelerar()
    gol.acelerar()
    gol.acelerar()
    console.log(gol.getVelocidadeAtual())
    gol.freiar(10)
    console.log(gol.getVelocidadeAtual())
    gol.farol(false)
    console.log(gol.getFarolStatus())




// ACELERAR
// FREIAR 
// ACENDER FAROL 
// BUZINAR 
// DESLIGAR 
// LIGAR 
