//EXEMPLOS DE EVENTOS E SEUS USOS EM JAVASCRIPT
 
//-----------------------------------------------------------------------------------------------------------------

// Exemplo onclick - apos o click 
// onclick="eventoClick()" - Chama a função no evento

function eventoClick(){

    // alert("Acionou um evento de Click");
    document.body.style.backgroundColor = "Yellow"; //atua sobre o elemento body, mudando o estilo de fundo

}

// Exemplo ondlbclick - apos o duplo Click
// ondblclick="eventoDblClick()" - Chama a função no evento

function eventoDblClick(){

    alert("Evento de Click duplo");

}

//-----------------------------------------------------------------------------------------------------------------

//Eventos de Mouse

//Exemplo onmouseover - quando o mouse esta sobre o elemento
// onmouseover="viraVermelho()" - Chama a função no evento

function viraVermelho(){

    let div = document.getElementById("teste");
    div.style.backgroundColor = "red";
    
}

// Exemplo onmouseout - quando o mouse sai do elemento
// onmouseover="viraVermelho()" - Chama a função no evento

function viraAzul(){

    let div = document.getElementById("teste");
    div.style.backgroundColor = "blue";

}

// Exemplo onmousemove - dispara a cada movimento do mouse
// onmousemove="adicionaTexto()" - Chama a função no evento

function adicionaTexto(){

    let p = document.getElementById("texto");
    p.append('O mouse moveu<br>'); // o metodo .append acrescenta o q foi passado ao elemento ( append = acrescentar)

}

// Exemplo onmousedown - dispara quando o click em algum lugar da tela ocorre
//onmousedown="alertClick()" - Chama a função no evento

function apertaClick(){

    alert("Clicou na tela");

}

// Exemplo onmouseup - dispara quando o click do mouse é solto
//onmouseup="alertClick()" - Chama a função no evento

function soltaClick(){

    alert("Soltou o Click")

}

//-----------------------------------------------------------------------------------------------------------------

//Eventos em capos do tipo Input

//Exempo onfocus - dispara quando o elemento esta em foco
//onfocus="limpaTexto()" - Chama a função no evento

function insereTexto(){

    document.getElementById("campoTexto").value = "Digitado Automaticamente";

}

//Exempo onchange - dispara quando o elemento sofre alguma alteração e sai do foco
//onchange="mudou()" - Chama a função do evento

function mudou(){

    console.log('mudou'); //dispara quando o conteudo presente no input muda

}

//Exempo onblur - dispara quando o elemento sai do foco
//onblur="limpaTexto()" - Chama a função do evento

function limpaTexto(){

    document.getElementById("campoTexto").value = "";

}

//-----------------------------------------------------------------------------------------------------------------

//Eventos de Tecla precionada

//Exemplo onkeypress - dispara quando uma tecla é precionada e eum caractere imprimivel(teclas como shift nao acionam esse evento)
//onkeypress="teclaPressionada()"

function teclaPressionada(){

    let input = document.getElementById("campoTexto").value;
    console.log(input);

}


//Exemplo onkeydown - dispara quando uma tecla é precionada (se segurar a tecla continua ate solta-la)
//onkeydown="teclaPressionada()"

function teclaPressionada(){

    let input = document.getElementById("campoTexto").value;
    console.log(input);

}

//Exemplo onkeyup - dispara quando uma tecla é solta sobre um elemento(so funciona quando soltar a tecla)
//onkeyup="teclaPressionada()"

function teclaPressionada(){

    let input = document.getElementById("campoTexto").value;
    console.log(input);

}

//-----------------------------------------------------------------------------------------------------------------

//Exemplo onload - dispara quando a página terminou de ser carregada. body.
//onload="carregado()"

function carregado(){

    alert("A página terminou de carregar");

}

//Exemplo onreasize- dispara quando há um redimencionamento da janela
//onreasize="redimencionado()"

function redimencionado(){

    console.log("Houve um redimensionamento");

}
