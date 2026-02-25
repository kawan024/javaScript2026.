function calculoIMC(peso, altura){
    let imc = peso / (altura ** 2);

    console.log("Seu IMC é, " + imc);

    if (imc < 18,5){
        console.log("Clasificação: Abaixo do peso");
    }
    else if (imc >= 18,5 && imc <= 24,9){
        console.log("Classificação: Peso normal");
    }
    else if(imc >= 25 && imc <= 29,9){
        console.log("Classificação: Sobrepeso");
    }
    else {
        console.log("Clasificação: Obesidade");
    }
}
calculoIMC(84, 1.84)