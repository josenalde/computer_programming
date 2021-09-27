//triangulo de floyd
let n, i=1, j, t=1
n = parseInt(prompt('n: '));
if (n > 0 && !isNaN(n)) {
	while (i<=n) {
		j = 1;
		linha = '';
		while (j <= i) {
			//console.log('%d %d %d', i, j, t);
			//exibe um abaixo do outro
			//console.log(t);
			linha += t + '\t';
			t++;
			j++;
		}
		console.log(linha);
		i++;
	}
}
console.log('FIM');