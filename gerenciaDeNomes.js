
function juntarDoisNomes(primeiroNome, sobrenome) { 
    return `${primeiroNome} ${sobrenome}`
}
function nomeEhValido(nome) {
    return nome != ""
}

module.exports.juntarDoisNomes = juntarDoisNomes
module.exports.nomeEhValido = nomeEhValido