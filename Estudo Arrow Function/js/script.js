//Arrow Function

//modelos de sintaxes possiveis

// (a, b) => {
//     return a + b;
// }

// (a, b) => a + b; //Se a função so possuir uma expresão é possivel omitir as chaves

//Exemplos com Arrow Function 

//------------------------------------------------------------------------------------------
//Varios argumentos


let a = 5;

let b = 10;

let c = (num1, num2) => num1 + num2;

console.log(c(a,b));

let d = (x, y) => {

    let op;

    if(x >= 5){
        op = x * y;
    } else{
        op = x / y;
    }

    return op; 
}

console.log(d(a, b));

//------------------------------------------------------------------------------------------
//Um argumento

let frase = "O lucas é um ótimo dev"

let fraseArray = (frase) => frase.split(' ');//No caso de 1 argumento, é possiveo n utilizar ()
// let fraseArray = frase => frase.split(' '); //Isso Funciona

console.log(fraseArray(frase))

//------------------------------------------------------------------------------------------
//sem argumento

let semArg = () => console.log("Não tenho argumentos");

semArg();

//------------------------------------------------------------------------------------------
//Arrow functions encadeadas

let exemplo = "O Lucas é um ótimo dev";

let Exseparar = (separado) => separado.split(' ');

let Exsaida = (teste) => teste.join(', ');

console.log(Exsaida(Exseparar(exemplo)));

//------------------------------------------------------------------------------------------
//Casos de uso

let roupas = [
    {produto: 'Camisa', preco: 25, cor: 'Amarelo'},
    {produto: 'Calça', preco: 80, cor: 'Azul'},
    {produto: 'Jaqueta', preco: 100, cor: 'Preto'},
    {produto: 'Camiseta', preco: 15, cor: 'Rosa'},
    {produto: 'calção', preco: 20, cor: 'Azul'},
]

let precoMaiorQue50 = roupas.filter(roupa => {
    return roupa.preco >= 50
}) 

console.log(precoMaiorQue50);

//Functions e ArrowFunctions podem desempenhar os mesmos papeis
//Se diferenciado apenas pela forma de declaração

setTimeout(() => {
    console.log("Deu tempo")
}, 150);

// setTimeout(function() {
//     console.log("Deu tempo")
// }, 150);

//------------------------------------------------------------------------------------------
//Casos em que a Function nao pode ser substituida pela ArrowFunction

//Nao usar arrow function dentro de objetos pois:

//A arrow function busca o this do contexto global (o objeto principal da página: window)
//e não do escopo do objeto. Entao a menos q exista por algum motivo uma variavel solta
//declarada como var e com o mesmo nome da propriedade, a função nao funciona pois o this não referencia nada em window.

//OBS: var funciona pois, ao ser declarado, ele se torna uma propriedade do obj global window, 
//     "deixando a variavel a mostra" pra página toda poder utilzar ou redeclarar.
//     Essa prática pode causar inconsistencias e quebras de lógica no script.

let pessoa = {
    nome: "Lucas",
    sayName: () =>{
        console.log(this.nome); 
    }
}

pessoa.sayName(); //retorna undefined

//forma correta:

let pessoa1 = {
    nome:"Lucas",
    sayName() {
        console.log(this.nome);
    }
}

pessoa1.sayName();

//Exemplo com um button:

let btn = document.getElementById('btn');
console.log(btn)

//Nao funciona:

// btn.addEventListener('click', () =>{
//     this.classList.toggle('classe');
// })

//funciona:

btn.addEventListener('click', function() {
    this.classList.toggle('classe');
})