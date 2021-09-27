let n, i, E=0;
n = parseInt(prompt('n: '));
if (n > 0 && !isNaN(n)) {
	for (i=1; i<=n; i++) {
		// calcula o fatorial de i!
		let fat_i = 1;
		for (let j=i;j>=1;j--) {
			fat_i *= j;
		}
		//
		E += 1/(fat_i);
	}
	console.log(E.toFixed(4));
}
console.log('FIM');