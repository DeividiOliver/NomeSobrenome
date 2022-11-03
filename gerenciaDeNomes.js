
function juntarDoisNomes(primeiroNome, sobrenome) { 
    return `${primeiroNome} OUTRA COISA ${sobrenome}`
}
function nomeEhValido(nome) {
    return nome != ""
}

module.exports.juntarDoisNomes = juntarDoisNomes
module.exports.nomeEhValido = nomeEhValido