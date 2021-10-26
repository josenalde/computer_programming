var pacientes = []; //declara vetor global

function adicionarPaciente() {
    var paciente = document.getElementById('txtPaciente');
    var outLista = document.getElementById('outLista');
    var nome = paciente.value;

    if (nome == '') {
        alert('informe nome do paciente');
        paciente.focus();
        return;
    }

    pacientes.push(nome); //adiciona ao fim do vetor (fila)

    var lista = ''; //string para juntar pacientes

    for (let i =0; i < pacientes.length; i++) {
        lista += (i+1) + '. ' + pacientes[i] + '\n';
    }

    outLista.textContent = lista;

    paciente.value = ''; //limpa campo
    paciente.focus();
}

function pacienteUrgencia() {
    var paciente = document.getElementById('txtPaciente');
    var outLista = document.getElementById('outLista');
    var nome = paciente.value;

    if (nome == '') {
        alert('informe nome do paciente');
        paciente.focus();
        return;
    }

    pacientes.unshift(nome); //adiciona ao inicio do vetor (prioridade e desloca os demais)

    var lista = ''; //string para juntar pacientes

    for (let i =0; i < pacientes.length; i++) {
        lista += (i+1) + '. ' + pacientes[i] + '\n';
    }

    outLista.textContent = lista;

    paciente.value = ''; //limpa campo
    paciente.focus();
}

function atenderPaciente() {
    var paciente = document.getElementById('txtPaciente');
    //verifica se vetor de pacientes está vazio
    if (pacientes.length == 0) {
        alert('sem pacientes na fila de espera');
        paciente.focus();
        return;
    }
    var outAtendimento = document.getElementById('outAtendimento');
    var outLista = document.getElementById('outLista');

    var atender = pacientes.shift(); //remove elemento do início da fila e retorna na variável atender

    outAtendimento.textContent = atender;  

    var lista = ''; //string para juntar pacientes

    for (let i =0; i < pacientes.length; i++) {
        lista += (i+1) + '. ' + pacientes[i] + '\n';
    }

    outLista.textContent = lista;

}

var btAdicionar = document.getElementById('btAdicionar');
btAdicionar.addEventListener('click', adicionarPaciente);

var btUrgencia = document.getElementById('btUrgencia');
btUrgencia.addEventListener('click', pacienteUrgencia);

var btAtender = document.getElementById('btAtender');
btAtender.addEventListener('click', atenderPaciente);