import "./style.scss"
const gerenciaDeNomes = require("./js/gerenciaDeNomes")

console.log ("Olá mundo show")

function executar_01() {
    alert ("FUI DISPARADO")
}

const nome = document.querySelector("#nome").value
const sobrenome = document.querySelector("sobrenome").value

gerenciaDeNomes.juntarDoisNomes(nome, sobrenome)

const botao_01 = document.querySelector("#botao_ex_01")
botao_01.addEventListener("click", executar_01)