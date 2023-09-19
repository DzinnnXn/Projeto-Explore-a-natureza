const imagens = document.querySelectorAll('.scroll img');
const textos = document.querySelectorAll('.textos-main');
imagens.forEach((imagem, index) => {
    imagem.addEventListener('click', () => {
      // Oculta os textos
    textos.forEach(texto => {
        texto.style.display = 'none';
    });
    textos[index].style.display = 'block';
    });
});

// FAQ
const faqs = document.querySelectorAll(".faq");
faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});

