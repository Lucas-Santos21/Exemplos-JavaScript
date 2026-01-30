//Async e Await

//Async: Define que uma função é assincrona, ou seja, ela necessita esperar uma ou mais
//       promisses terminarem para completar sua execução, retornando uma Promise.
//       Uma função Async também habilita o uso do await internamente.   

//await: Utilizado para fazer o programa no escopo onde ele está declarado(como em uma função) 
//       ter q esperar a Promise terminar para continuar sua execução, impedindo que o sistema
//       tente realizar uma ação sem que um determinado dado tenha sido retornado.

//OBS: Uma função sincrona pode retornar o resultado de uma promise, mas uma funçãp async
//     é OBRIGADA a retornar uma promise


//Sintaxe - Exemplo

// function primeiraFuncao(){

//     return new Promise((resolve) => {

//         setTimeout(() => {
//             console.log("Esperou isso aqui!");
//             resolve();
//         }, 1000)

//     })

// }

// async function segundaFuncao(){

//     console.log("Iniciou");

//     await primeiraFuncao();

//     console.log("Terminou");

// }

// segundaFuncao();

//Exemplo Prático

function getUser(id){

    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((data) => data.json())
        .catch((err) => console.log(err))

}

async function showUserName(id){

    try{
        const user = await getUser(id)
    
        console.log(`O nome do usuário é: ${user.name}`)

    } catch(err){
        console.log(`Erro: ${err}`)
    }

}

showUserName(2)