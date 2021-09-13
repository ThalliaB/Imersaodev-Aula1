var nome = "Thallia";

var notaDoPrimeiroBimestre = 9;
var notaDoSegundoBimestre = 8;
var notaDoTerceiroBimestre = 9.6;
var notaDoQuartoBimestre = 10;

var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4;

var notaFixada = notaFinal.toFixed(1);

console.log("Bem vinda " + nome + "! Sua média foi de " + notaFixada);