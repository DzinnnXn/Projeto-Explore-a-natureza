export function Formulario() {

    const jsmodal = document.querySelector(".js-modal");
    const Site = document.querySelector(".site");
    const dados = {}
    if (localStorage.getItem("email") === null) {
      setTimeout(() => {
        jsmodal.classList.add("active");
        Site.classList.add("active");
      }, 1000);
    }
    else {
      jsmodal.classList.remove("active");
      Site.classList.remove("active");
    }
    
    function pegarValorForm(event){
      dados[event.target.name] = event.target.value
      console.log(dados)
    }
    
    // adiciona um listener para o envio do formulário
    jsmodal.addEventListener('change', pegarValorForm)
    document.querySelector(".modal-forms").addEventListener("submit", (event) => {
      event.preventDefault();
      localStorage.setItem("email", JSON.stringify(dados.email))
      alert("Dados salvos com sucesso")
      jsmodal.classList.remove("active");
      Site.classList.remove("active");
    });
    
    // adiciona um listener para o botão de fechar
    document.querySelector(".modal-close").addEventListener("click", () => {
      // esconde o elemento
      jsmodal.classList.remove("active");
      Site.classList.remove("active");
    });
    }