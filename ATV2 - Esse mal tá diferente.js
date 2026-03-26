function Calcular(){

let a = parseFloat(document.getElementById("inputPeso").value);
let b = parseFloat(document.getElementById("inputAltura").value);
let imc = a / (b**2);
let resposta = " ";
let mensagem = " ";
if (imc < 18.5){
    resposta = "Você está abaixo do peso";
    mensagem = "Você tá só o osso"
} else if (imc < 24.9){
    resposta= "Você está com um peso normal";
    mensagem= "peso top!";
} else if (imc >= 25.0 && imc <29.9){
    resposta="Você está sobrepeso";
    mensagem="Você tá gordinho(a)";
} else if (imc >= 30.0 && imc < 34.9){
    
}
}