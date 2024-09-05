document.getElementById("formComparacao").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    var campoA = parseFloat(document.getElementById("campoA").value);
    var campoB = parseFloat(document.getElementById("campoB").value);
    var mensagem = document.getElementById("mensagem");

    if (campoB > campoA) {
        mensagem.textContent = "Formulário válido! O número B é maior que o número A.";
        mensagem.className = "mensagem valido";
    } else {
        mensagem.textContent = "Formulário inválido! O número B deve ser maior que o número A.";
        mensagem.className = "mensagem invalido";
    }
});
