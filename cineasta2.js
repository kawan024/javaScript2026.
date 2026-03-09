let CorSemaforo = "Vermelho";
let VeiculoEmergencia = False;

if (VeiculoEmergencia === true){
    console.log("ALERTA: Ambulância detectada! Todos os sinais fechados. CRUZAMENTO LIVRE.");
} else if (CorSemaforo === "Verde"){
    console.log("Pode passar! Siga com cuidado.");
} else if (CorSemaforo === "Amarelo"){
    console.log("ATENÇÃO! Reduza a velocidade e prepare-se para parar.");
} else {
    console.log("PARE! Aguarde o sinal verde.");
}