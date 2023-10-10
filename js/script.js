const form = document.querySelector('.form')
const dados = {}

function pegarValorForm(event){
    dados[event.target.name] = event.target.value
}

form.addEventListener('change', pegarValorForm)
form.addEventListener('submit')