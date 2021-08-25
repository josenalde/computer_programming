//Declarar variáveis D
var N, Y, Z, Q; //compatibilidade com OBI
//let N, Y, Z, Q;
/* 
abre bloco de comentário
N número de canetas
Y troco
Z nota entregue para pagar
Q valor de cada caneta
*/
//Ler variáveis '10'
//N = prompt();//lê como TEXTO
//converter de texto para número inteiro
//console.log(typeof(N)); //exibe o tipo da variável N
//N = parseInt(N); //converte para inteiro
//console.log(typeof(N));
N = parseInt(prompt());
Y = parseInt(prompt());
Z = parseInt(prompt());
//aplicar teste das restrições
if (Z>Y && N>0 && Y>=0 && Z>0) {
	Q = (Z-Y)/N;
	console.log(Q);
} else {
	console.log('Erro');
}
//FIM