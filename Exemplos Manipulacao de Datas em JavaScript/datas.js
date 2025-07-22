//EXEMPLOS DE MANIPULAÇÃO DE DATAS E SEUS USOS EM JAVASCRIPT
 
//-----------------------------------------------------------------------------------------------------------------

//Objeto especial Date

//Date é um objeto utilizado em JavaScript para realizar a manipulação de datas
//Para realizar qualquer manipulação, é necessário que ele previamente esteja declarado

//Exemplo declaração Date

let data = new Date();
//console.log(data); //retorna a data e horario atuais

//-----------------------------------------------------------------------------------------------------------------

//Metodo para pegar o ano com 4 digitos

let ano = data.getFullYear();
//console.log(ano);

//-----------------------------------------------------------------------------------------------------------------

//Metodo para pegar o Mês atual de 0 ate 11 - 0 = Janeito e 11 = Dezembro

let mes = data.getMonth();
//console.log(mes);

//Mostrando o Mês por extenso

const mesesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembo", "Dezembro"]
let mesEscrito = mesesDoAno[data.getMonth()]; // vai utilizar o numero do mes como indice no array pra mostrar o mes atual
//console.log(mesEscrito);

//-----------------------------------------------------------------------------------------------------------------

//Metodo para pegar o Dia do Mês - 1 até 31

let diaMes = data.getDate();
//console.log(diaMes);

//-----------------------------------------------------------------------------------------------------------------

//Metodo para pegar o Dia da Semana atual de 0 a 6 - 0 = Domingo e 6 = Sábado

let diaSemana = data.getDay();
//console.log(diaSemana);

const diasDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
let diaSemanaEscrito = diasDaSemana[data.getDay()];

//console.log(diaSemanaEscrito);

//-----------------------------------------------------------------------------------------------------------------

//Metodo para pegar a hora - de 0 (meia noite) até 23:59

let hora = data.getHours();
//console.log(hora);

//-----------------------------------------------------------------------------------------------------------------

//Metodo para pegar os minutos - de 0 até 59

let minutos = data.getMinutes();
// console.log(minutos);

//-----------------------------------------------------------------------------------------------------------------

//Metodo para pegar os segundos - de 0 até 59

let segundos = data.getSeconds()
//console.log(segundos);

//-----------------------------------------------------------------------------------------------------------------

//Metodo para pegar os milissegundos - de 0 até 999

let milissegundos = data.getMilliseconds()
//console.log(milissegundos);

//-----------------------------------------------------------------------------------------------------------------

//Metodo para pegar os milissegundos da data passada

let dataMilissegundos = new Date();

let dtMilissegundos = dataMilissegundos.getTime(); //getTime retorna o total de millisegundos da data

//console.log(dtMilissegundos);

//-----------------------------------------------------------------------------------------------------------------

//Metodo para pegar a data no padrao brasileiro - DIA / MES / ANO e HORARIO

let dataBR = data.toLocaleString('pt-br'); //é necessário passar como parametro o local do formado - pt-br = Brasil
//console.log(dataBR);

let dataBrCurta = data.toLocaleString('pt-br', {dateStyle: 'short'}); //Passa somente a data em formato brasileiro
//console.log(dataBrCurta); 

let dataBrHrCurta = data.toLocaleString('pt-br', {timeStyle: 'short'}); //Passa somente o horario em formato brasileiro
// console.log(dataBrHrCurta);

//Pegando os valores separadamente e depois juntando

d = new Date();
diaMes = d.getDate();
mes = d.getMonth() + 1;
ano = d.getFullYear();

let addZero = (x) => x < 10 ? '0' + x : '' + x

let dataPadraoBR = `${addZero(diaMes)}/${mes}/${ano}`

//console.log(dataPadraoBR);

//-----------------------------------------------------------------------------------------------------------------

//Comparando datas - Maior ou menos - Ex: Vencimentos

let hoje = new Date();

let vencimento = new Date(2022, 0, 15); // Recebe e guarda uma data passada por parametro ANO/MES/DIA
                                        // no padrao enviado pelos metodos get da classe date (como Janeiro = 0 etc).

if(hoje > vencimento){

    //console.log("Sua conta está vencida!")

}else{

    //console.log("Ainda nao venceu, tudo certo!")

}

//DIFERENÇA EM DIAS ENTRE DUAS DATAS

let dataInicial = new Date();

let dataFinal = new Date(2025, 11, 31);

let diferencaTempo = dataFinal.getTime() - dataInicial.getTime();

let diferencaDias = Math.ceil(diferencaTempo / (24*60*60*1000)); //Mah.ceil arredonda o resultado da operação
                                                                 //calculo para converter milesimos de segundos para dias
console.log(diferencaDias + " dias");

