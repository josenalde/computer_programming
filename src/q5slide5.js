let n, maior, menor;

n = parseInt(prompt('n: '));
if (n >= 0 && !isNaN(n)) {
	maior = n;
	menor = n;
}

do {
	//atualiza maior e menor
	if (n > maior) maior = n;
	if (n < menor) menor = n;
	n = parseInt(prompt('n: (negativo para sair)'));
} while (n >= 0);
// se fora do laço n foi negativo ou texto, não exibe
if (!isNaN(maior) && !isNaN(menor))
	console.log('maior: %d e menor: %d',maior,menor);