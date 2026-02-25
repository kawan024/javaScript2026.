const readline = require('readline-sync');

console.log("jogo da adivinhacao, chute um número de 1 a 10");

const numeroSecreto = Math.floor(Math.random()*10 + 1);

let palpite = readline.questionInt("qual é seu palpite? ")
let tentativas = 1;

while(palpite != numeroSecreto){
    if (palpite < numeroSecreto){
        console.log("O número Secreto é menor que seu chute.")
    }
    else{
        console.log("O número secreto é maior que seu chute.")
    }

    palpite = readline.questionInt("Tente de novo");
    tentativas++;
}
console.log(`parabéns, voçê acertou o ${numeroSecreto} em ${tentativas}`)