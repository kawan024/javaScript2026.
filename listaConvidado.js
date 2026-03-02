const readline = require('readline-sync');

let listaFinal = "";
let contador = 0;
let continuar = "s";

console.log("Cadastro de convidados."); 

while (continuar === "s"){
    contador++;

    let nome = readline.question(`Digite o nome do convidado ${contador}:`);
    let idade = readline.question(`Digite a idade do convidado ${nome}`);
    
    listaFinal += `${contador}. Nome: ${nome} Idade: ${idade} \n`;

    continuar = readline.question("Deseja cadastrar mais alguém? (s/n)");
}

console.log("CONVIDADO CADASTRADOS: ");

if (listasFinal ===""){
    console.log("Ninguem foi convidado");
}else {
    console.log(listaFinal);
}