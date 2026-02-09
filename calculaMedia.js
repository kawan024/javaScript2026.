let nota1 = 6;
let nota2 = 8;
let nota3 = 9;
let nota4 = 10;

const nomeAluno = "Wagner";

let media = (nota1 + nota2 + nota3 + nota4) / 4

if (media >= 7){
    console.log("O aluno wagner está aprovado.")
}  
if(media >= 5 && media < 7){
    console.log("O aluno Wagner está no se liga.")
}
if (media < 5){
    console.log("O aluno wagner está reprovado.")
}

console.log("O aluno: " + nomeAluno);
console.log("Tem a média:" + media);