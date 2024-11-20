const botao01 = document.getElementById('botao-cadastro-empresa-footer');
botao01.addEventListener('click', function() {
    window.location.href = './cadastro_empresa.html';});

const botao02 = document.getElementById("botao-instagram-footer");

botao02.addEventListener('click', function() {
    // Cria um novo elemento âncora
    const link = document.createElement('a');
    link.href = 'https://www.instagram.com/roll.com.br/';
    link.target = '_blank'; // Abre em uma nova aba

    // Simula um clique no link
    link.click();
});