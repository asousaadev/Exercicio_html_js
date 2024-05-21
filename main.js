
function validarFormulario() {

    const campoA = document.getElementById('campoA').value;
    const campoB = document.getElementById('campoB').value;
    // const mensagemsucesso = document.querySelector('.success-message');

    if (parseInt(campoB) > parseInt(campoA)) {

        const mensagemSucesso = `O número digitado no campo B: <strong>${campoB}</strong> é maior que o do campo A: <strong>${campoA}</strong>.`;
        const containerMensagemSucesso = document.querySelector(".success-message");
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = "block";

        campoA.value = '';
        campoB.value = '';

        return true;

    } else {

        document.querySelector(".mensagem-erro").style.display = "block";


        return false;
    }

}
