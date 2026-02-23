function calculaJuroComposto(capital,taxa, tempo){
    let montante = capital * (1 + (taxa/100)) ** tempo;

    return montante;
}

let conta1 = calculaJuroComposto(5000, 4, 6);
console.log("O montante é R$" + conta1.toFixed(2));
