//eventos de tempo em JavaScript

//SetTimeout - Executa uma função depois de esperar um numero especificado de milissegundos.
//sintaxe -> setTimeout(function, milissegundos) - > tem como parametros a função q vai ser executada a cada tantos milissegundos.

//onclick="ativarContagem()" - exemplo de uso do SetTimeout

function ativarContagemTimeout(){

    document.getElementById("tempo").innerHTML = "Começou a contar!";
    
    //Executa apenas uma vez após o tempo determinado
    tempo = setTimeout(function(){

        document.getElementById("tempo").innerHTML = "Executou o setTimeout";

    }, 5000);

}

function pararContagemTimeout(){

    clearTimeout(tempo);//comando para parar o tempo do setTimeout - necessita q o setTimeout esteja atrelado a uma variavel,
                        //geralmente global (sem let, var ou const)
    
    document.getElementById("tempo").innerHTML = "Parou";

}

//SetInterval - É o mesmo qye i setTimeout(), mas repete a execução da função continuamente.
//              Se não for parado com clearInterval (igual o clearTimeout) continuará funcionando.

//sintaxe -> setInterval(function, milissegundos) - > tem como parametros a função q vai ser executada a cada tantos milissegundos.

function ativarContagemInterval(){

    tempo = setInterval(function() {
    
        var cronometro = document.getElementById("tempo").innerHTML;
        var soma = parseInt(cronometro) - 1;

        if(soma === 0){

            document.getElementById("tempo").innerHTML = "Tempo esgotado";
            pararContagemInterval();

        } else{

          document.getElementById("tempo").innerHTML = soma;   

        }

    }, 1000);

}

function pararContagemInterval(){

    clearInterval(tempo);

}