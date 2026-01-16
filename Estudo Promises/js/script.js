//Uma Promise (promessa) em JavaScript é um objeto que representa o sucesso ou a falha de uma operação assíncrona
//Sendo utilizada para lidar com tarefas que demoram um pouco para terminar 
// (como buscar dados em uma API, carregar um arquivo ou um temporizador) sem travar o restante do código. 

//-----------------------------------------------------------------------------------------------------------------------------------------------
//Criação da Promisse
//-----------------------------------------------------------------------------------------------------------------------------------------------
const myPromise = new Promise((resolve, reject) => { //A promessa possui os dois argumentos passados pela arrow function
                                                     //que irão demarcar se a função foi bem sucedida no que tentou fazer ou não

    const nome = "Lucas"

    if(nome === "Lucas"){
        resolve('Usuário Lucas encontrado')
    } else {
        reject('O usuário Lucas não foi encontrado') //funciona como uma exception na promise
    }

})

//A promise só vai executar após encadear um método .then(como o abaixo) nela, "simbolizando o fim" da execução

myPromise.then((data) => { //Aqui a variavel myPromisse (que carrega a promise) está retornando
                           //O resolve ou reject com base no resultado da promessa (data é uma variavel q simboliza o retorno)
                           //.then faz esperar a execução da promiise para continuar
    console.log(data)
})

//-----------------------------------------------------------------------------------------------------------------------------------------------

// Encadeamento de then's

//-----------------------------------------------------------------------------------------------------------------------------------------------

//Lembrar que cada .them funciona como uma "Nova Promise"
//a partir do q foi tratado na Promise anterior

const myPromise2 = new Promise((resolve, reject) => {                                                      

    const nome = "Lucas"

    if(nome === "Lucas"){
        resolve('Usuário Lucas encontrado')
    } else {
        reject('O usuário Lucas não foi encontrado') //funciona como uma exception na promise
    }

})

myPromise2.then((data) => { //Aqui o then transforma o dado da promise após sua execução
    return data.toLowerCase()
    
}).then((stringmodificada) => { // E no segundo then(encadeado) ele utiliza o dado modificado anteriormente para retornar algo
    console.log(stringmodificada)
})

//-----------------------------------------------------------------------------------------------------------------------------------------------

//Retorno do Catch

//-----------------------------------------------------------------------------------------------------------------------------------------------

const myPromise3 = new Promise((resolve, reject) => { 
                                                     

    const nome = "Neymar"

    if(nome === "Lucas"){
        resolve('Usuário Lucas encontrado')
    } else {
        reject('O usuário Lucas não foi encontrado') 
    }

})

myPromise3.then((data) => {
    console.log(data)

}).catch((err) => {//Funciona como o catch do try catch convencional, permite que a partir de uma falha na execução,
                   //uma outra lógica seja executada(como tratamento desse erro, mensagem de retorno etc)
    
    console.log(`Aconteceu um erro: ${err}`)
})

//-----------------------------------------------------------------------------------------------------------------------------------------------

//Resolver várias promessas com all

//-----------------------------------------------------------------------------------------------------------------------------------------------

//O metodo nativo da Promise .all() permite executar mais de uma promise ao mesmo tempo
//encadenado um .then para todos. Se uma das promises soltar um reject em vez de resolve
//a execução retornará apenas o reject da q falhou primeiro

const p1 =  new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("P1 ok!")
    }, 2000);
})

const p2 =  new Promise((resolve,reject) => {
    resolve("P2 ok!")
})

const p3 =  new Promise((resolve,reject) => {
    resolve("P3 ok!")
})

const resolveAll = Promise.all([p1, p2, p3]).then((data) => { //No caso de uma das promises demorar mais que as outras para resolver, o Promise.all irá
                                                              //esperar o término desta última para continuar a execução

    console.log(data)
})

console.log('Depois do all()')//vai ser executado depois do .all

//-----------------------------------------------------------------------------------------------------------------------------------------------

//Várias promessas com race

//-----------------------------------------------------------------------------------------------------------------------------------------------

//O método .race() também permite executar mais de uma Promise ao mesmo tempo, mas diferente
//do .all() que espera todas resolverem, o race retorna a primeira Promice que foi resolvida
//a mais rapida. Lembrar: se uma promise falhar, e não for a primeira a resolver, o método
//vai ignorar o reject e retornar somente a outra que deu certo

const p4 =  new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("P4 ok!")
    }, 2000);
})

const p5 =  new Promise((resolve,reject) => { //p5 (NESTE CASO) sempre vai executar primeiro pois foi declarada primeiro
    resolve("P5 ok!")
})

const p6 =  new Promise((resolve,reject) => {
    resolve("P6 ok!")
})

const resolveAllRace = Promise.race([p4, p5, p6]).then((data) => { 

    console.log(data)
})

//-----------------------------------------------------------------------------------------------------------------------------------------------

//Exemplo real

// Fetch request na API do GitHub
// Fetch API 

const userName = 'Lucas-Santos21'

fetch(`https://apigithub.com/users/${userName}`, { //buscando dados da API do GitHub com fetch
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json',
    }, 
}).then((response) => { //pegando a informação e retornando o JSON
                        //Necessário transformar em json para utilziar as informações da resposta

    console.log(typeof response)
    console.log(response)
    return response.json()

}).then((data) => { //Utilizando o JSON para mostrar algumas informações do perfil
    console.log(`O nome do usuário é: ${data.name}`)
}).catch((err) => {
    console.log(`Houve algum erro: ${err}`)
});