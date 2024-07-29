fetch('Shared/cabecalho.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('cabecalho').innerHTML = data;
    })
    .catch(error => console.error('Erro ao carregar o cabeçalho:', error));

document.getElementById('formContato').addEventListener('submit', function (event) {
    event.preventDefault(); 
    window.location.href = "ConfirmacaoEnvio.html";
});