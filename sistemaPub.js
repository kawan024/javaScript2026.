const realine = require('readline-sync');

console.log("Sistema de acesso ao Pub do jonh");

const nome = readline.question("Qual seu nome? ")
const idade = readline.questionInt("Qual sua idade? ");

if (idade >= 18) {
    console.log(`Olá ${nome}, sua entrada foi autorizada. `);
    const jovem = readline.keyInYN("Deseja um refri? ");
    if (querBeber){
        console.log("Garçom tem coca e agua! ");
    } else{
        console.log("Tenho sucos com agua de gás");
    }
} else if (idade >= 16){
    console.log(`Olá ${nome}, voçê precisa estar acompanhado.. `);
} else{
    console.log (`Sinto muito ${nome}, apenas maiores que 16.... `);
}