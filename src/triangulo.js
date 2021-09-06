// digite aqui seu programa

//DECLARA
var a,b,c,d;
var t1,t2,t3,t4;
//LER
scanf("%d%d%d%d", "a", "b", "c", "d");
//CALCULAR (LÓGICA DE PROGRAMAÇÃO)
t1 = (a<b+c && b<a+c && c<a+b);
t2 = (a<b+d && b<a+d && d<a+b);
t3 = (b<c+d && c<b+d && d<b+c);
t4 = (a<d+c && c<a+d && d<a+c);

if (t1 || t2 || t3 || t4) printf("S\n");
else printf("N\n");