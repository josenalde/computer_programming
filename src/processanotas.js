function processaNotas() {
    //LER
    //ENTRADA
    var valor = document.getElementById('txtValor').value;
    console.log(parseInt(valor));
    //SAÍDAS PARÁGRAFOS H3
    var notasCemSaida = document.getElementById('outNotasCem');
    var notasCinquentaSaida = document.getElementById('outNotasCinquenta');
    var notasDezSaida = document.getElementById('outNotasDez');
    //limpa parágrafos de saída a cada execução
    notasCemSaida.textContent = '';
    notasCinquentaSaida.textContent = '';
    notasDezSaida.textContent = '';


    //TRATAMENTO DA CAIXA DE TEXTO DO VALOR
    if (valor <= 0 || isNaN(valor)) {
        alert("Informe o valor corretamente");
        document.getElementById('txtValor').focus();
        return;
    }

    //VERIFICA SE O VALOR DIGITADO É VÁLIDO, OU SEJA, PODE SER DECOMPOSTO EM 10, 50 OU 100
    //TESTA SE É MÚLTIPLO DE 10, POIS É A NOTA MÍNIMA EXISTENTE NA MÁQUINA
    if (valor % 10 != 0) { //não é múltiplo
        alert("Valor inválido para as notas disponíveis no momento");
        document.getElementById('txtValor').focus();
        return;
    }

    //calcula notas de 100, 50 e 10 490 / 100 4.9
    var notasCem = Math.floor(valor / 100);
    var resto = valor % 100; //o que sobrou para dividir em notas de 50 e 10
    var notasCinquenta = Math.floor(resto / 50);
    var resto = resto % 50; //o que sobrou para dividir em notas de 10
    var notasDez = Math.floor(resto / 10);
    
    //EXIBIR
    if (notasCem > 0) {
        notasCemSaida.textContent = notasCem + ' notas de R$ 100';
    }
    if (notasCinquenta > 0) {
        notasCinquentaSaida.textContent = notasCinquenta + ' notas de R$ 50';
    }
    if (notasDez > 0) {
        notasDezSaida.textContent = notasDez + ' notas de R$ 10';
    }
}
// criar referência (listener) para o evento do click no botão
var btSacar = document.getElementById('btSacar');
btSacar.addEventListener('click', processaNotas);