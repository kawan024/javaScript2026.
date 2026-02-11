let saldoConta = 500;
let precoIngresso = 900;

console.log("Tentendo comprar o ingresso...")

if (saldoConta >= precoIngresso){
    let troco = saldoConta - precoIngresso;
    console.log("Compra realizada bom show!");
    console.log("Seu troco é R$: " + troco)
} else {
    console.log("Saldo insuficiente. falta R$: " + (precoIngresso - saldoConta));
}