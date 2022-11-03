import "./style.scss"
const gerenciaDeNomes = require("./gerenciaDeNomes")

console.log("Olá mundo show")
const botao_01 = document.querySelector("#botao_ex_01")
botao_01.addEventListener("click", executar_01)

function executar_01() {
    alert('FUNCIONOU')
    const nome = document.querySelector("#nome").value
    const sobrenome = document.querySelector("#sobrenome").value

    const resultado = gerenciaDeNomes.juntarDoisNomes(nome, sobrenome)


    const divResultado = document.querySelector("#resultado_01")
    divResultado.innerHTML = resultado
}