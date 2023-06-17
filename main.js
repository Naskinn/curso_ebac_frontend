const form = qs('#form-hjs');
const campoB = qs('#campo-b');
const campoA = qs('#campo-a');
let formValido = false;

function qs(e){
    return document.querySelector(`${e}`);
}

function validaCampoB(campoB, campoA){
    return parseInt(campoB) > parseInt(campoA);
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const mensagemSucesso = `Enviado com sucesso, o número do campo B: <b>${campoB.value}</b> é maior que o número do campo A: <b>${campoA.value}</b>`;

    formValido = validaCampoB(campoB.value, campoA.value);

    if(formValido){
        qs('.success-message').innerHTML = mensagemSucesso;
        qs('.success-message').style.display = "block";
        qs('#form-hjs').reset();
    }
});

['keyup', 'change'].forEach( event => {
    [campoB, campoA].forEach( item => {
        item.addEventListener(event, function(e){
            formValido = validaCampoB(campoB.value, campoA.value);
            if(!formValido && campoB.value){
                campoB.classList.add('error');
                qs('.error-message').style.display = "block";
            }else{
                campoB.classList.remove('error');
                qs('.error-message').style.display = "none";
            }
        });
    });
});