document.addEventListener('DOMContentLoaded', function () {
    fetch('Shared/cabecalho.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('cabecalho').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o cabeçalho:', error));

    var formContato = document.getElementById('formContato');
    if (formContato) {
        formContato.addEventListener('submit', function (event) {
            event.preventDefault(); 
            window.location.href = "ConfirmacaoEnvio.html";
        });
    }

    var btnVoltar = document.getElementById('btnVoltar');
    if (btnVoltar) {
        btnVoltar.addEventListener('click', function () {
            window.location.href = "Index.html";
        });
    }
});