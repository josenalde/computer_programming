function calcularPeso() {
    var nome = document.getElementById("txtNome").value;
    var masculino = document.getElementById("rbMasc").value;
    var feminino = document.getElementById("rbFemi").value;
    var altura = parseFloat(document.getElementById("txtAltura").value);
    var resposta = document.getElementById("outResposta");

    if (nome=='' || (masculino==false && feminino==false)) {
        alert('Por favor, informe o nome e selecione o sexo...');
        document.getElementById("txtNome").focus();
        return;
    }
    if (altura==0 || isNaN(altura)) { //isNan retorna TRUE se valor não é numérico
        alert('Por favor, informe a altura corretamente...');
        document.getElementById("txtAltura").focus();
        return;
    }
    if (masculino) {
        var peso = 22 * Math.pow(altura, 2); // altura**2
    } else {
        var peso = 21 * Math.pow(altura, 2);
    }

    resposta.textContent = nome + ": seu peso ideal é " + peso.toFixed(2) + " kg"; 
}

var btResultado = document.getElementById("btCalcular");
btResultado.addEventListener("click", calcularPeso);

function limparCampos() {
    location.reload(); //recarrega página, limpando os campos
    document.getElementById('txtNome').value = '';
    document.getElementById("txtNome").focus();
}

var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparCampos);