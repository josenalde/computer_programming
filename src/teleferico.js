// digite aqui seu programa

//DECLARA
var c, a, nV;
//LER
scanf("%d%d", "c", "a");
//CALCULAR (LÓGICA DE PROGRAMAÇÃO)
if (c > a) {
   nV = 1;
} else if (a % (c-1) === 0) {
	nV = a / (c-1);
} else if (a % (c-1) !== 0) {
	nV = a / (c-1) + 1;
}
printf("%d\n", nV);