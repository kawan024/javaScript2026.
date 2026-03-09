let NomeHeroi = "Aragorn";
let PontosXP = 750;
let Categoria;

if (PontosXP < 100){
    Categoria = "Iniciante";
} else if (PontosXP < 500){
    Categoria = "Guerreiro";
} else if (PontosXP < 1000){
    Categoria = "Mestre";
} else {
    Categoria = "Lenda Viva";
}

console.log("O herói " + NomeHeroi + " possui " + PontosXP + " de experiência e seu rank atual é: " + Categoria);