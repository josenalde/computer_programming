// digite aqui seu programa

//DECLARAR
var n, p, c, q, r;
//LER
scanf("%d", "n");
scanf("%d%s%d", "p","c","q"); //%s para ler string/caracter

if (c == '*') r = p*q;
else r = p+q;

if (r <= n) printf("OK\n");
else printf("OVERFLOW\n");