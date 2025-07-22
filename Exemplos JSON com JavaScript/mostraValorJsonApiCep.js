const ajax = new XMLHttpRequest(); //metodo para fazer uma requisição a um site sem abri-lo pelo navegador

ajax.open('GET', 'https://viacep.com.br/ws/01001000/json/'); //abrindo a requisição ajax - .open - e utilzando o metodo GET 
                                                             //para pegar as informações do site
ajax.send(); //envia a solicitação

//onload = quando carregar as inforamções vindas do site

ajax.onload = function(){

    document.getElementById('area').innerHTML = this.responseText; //a resposta da requisição

    //pegando so uma propriedade do JSON

    let obj = JSON.parse(this.responseText); //essa variavel possui o json enviado pelo site

    alert(obj.ddd);//puxou a propriedade ddd

} 