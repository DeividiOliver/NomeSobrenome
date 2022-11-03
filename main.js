import "./style.scss"
const gerenciaDeNomes = require("./gerenciaDeNomes")

console.log ("Olá mundo show")

function executar_01() {

const nome = document.querySelector("#nome").value
const sobrenome = document.querySelector("#sobrenome").value

const resultado = gerenciaDeNomes.juntarDoisNomes(nome, sobrenome)


const divResultado = document.querySelector("#resultado_01")
divResultado.innerHTML = resultado

botao_01.addEventListener("click", executar_01)

}