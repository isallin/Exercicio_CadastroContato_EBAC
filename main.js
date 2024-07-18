const form = document.getElementById('contato-formulario')
let linhas = ''
form.addEventListener('submit', function(e) {
    e.preventDefault()

    const nomeCompleto = document.getElementById('nome-completo').value
    const numeroContato = document.getElementById('numero-contato').value

    let linha = '<tr>'
    linha += `<td>${nomeCompleto}</td>`
    linha += `<td>${numeroContato}</td>`
    linha += '</tr>'

    linhas += linha

    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas

    nomeCompleto.value=''
    numeroContato.value=''

})
