// EXEMPLOS DE JSON E SEUS USOS
 
// -----------------------------------------------------------------------------------------------------------------

// JSON - > JavaScript Object Notation - Notação de OBjeto JavaScript
// É uma forma de converter um Objeto em texto, e o contrário também, um texto em um objeto

// Utilizado principalmente para transmitir dados entre sistemas de forma simples, pois o formato de texto
// é lido por praticamente todas as linguagens de programação

// Dois metodos são utilizados para trabalhar com JSON em JavaScript

// JSON.parse() -> Converte texto no padrão JSON em objetos
// JSON.string() -> Converte objetos em texto padrão JSON

const carro = {
    marca:"fiat",
    modelo: "Uno",
    motor: ["1.6", '1.4', '1.0']

}

// -----------------------------------------------------------------------------------------------------------------

//Convertendo objeto para texto com JSON
//JSON.stringify()

let texto = JSON.stringify(carro); //stringfy transforma o objeto em texto

document.getElementById("area").innerHTML = texto; //imptime: {marca:"fiat", modelo: "Uno", ano: 2001}

//ATENÇÃO!!!

//Não é possivel utilizar esta variavel texto como objeto, pois foi convertida para texto, para utilizar o objeto novamente
//deve-se transforma-la em objeto novamente com JSON.parse

console.log(texto.modelo); //Não funciona
console.log(carro.modelo); //funciona

// -----------------------------------------------------------------------------------------------------------------

//Convertendo o objeto em forma de texto para objeto
//JSON.parse()

let obj = JSON.parse(texto);// convertido

console.log(obj.modelo); //Agora funciona pois virou um objeto novamente

// -----------------------------------------------------------------------------------------------------------------

//É possivel também exibir um elemento dentro de um array em um objeto após transformado devolta de texto

console.log(obj.motor[2]); //devolve o item na casa 2 do array

// -----------------------------------------------------------------------------------------------------------------

