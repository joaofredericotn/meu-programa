// Armazenar a URL atual para verificar quando o usuário retorna
var originalUrl = window.location.href;

// Adicionar um manipulador de evento ao link
document.getElementById('meuLink').addEventListener('click', function () {
    // Armazenar a URL atual antes de redirecionar
    sessionStorage.setItem('originalUrl', originalUrl);
});

// Verificar se o usuário voltou para a página original
window.onpageshow = function (event) {
    // Obter a URL original armazenada
    var originalUrl = sessionStorage.getItem('originalUrl');

    // Obter a URL atual
    var currentUrl = window.location.href;

    // Se a URL atual for a mesma que a original, exibir a mensagem
    if (originalUrl === currentUrl) {
        alert('HAHAHA segue lá po, acabei de fazer uma troll q vc');

        // Limpar a sessionStorage
        sessionStorage.removeItem('originalUrl');
    }
};