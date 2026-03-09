let nome = "Kawan Victor";
let idade = 25;
let temCupom = true;

let PRECO_CHEIO = 30;
let precoFinal;

if (idade >= 60){
    precoFinal = PRECO_CHEIO / 2;
} else if (idade < 18 || temCupom === true) {
    precoFinal = PRECO_CHEIO * 0.8;
} else {
    precoFinal = PRECO_CHEIO;
}

console.log(`Olá, ${nome}! O valor do seu ingresso é R$ ${precoFinal}`);