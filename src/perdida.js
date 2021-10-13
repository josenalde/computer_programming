var n;
n = parseInt(prompt());
//scanf("%d", "n");
var v = [], p;
var flagLast = true;
for (var i = 0; i<n-1; i++)
	v.push(parseInt(prompt()));
    //scanf("%d", "v[i]");
//método sort é string, baseado em unicode
//é preciso passar função de comparação
v.sort(function(a, b) {
  return a - b;
}); //ordena crescente
console.log(v.toString());
for (var i=0;i<v.length;i++) {
	if (v[i]!=(i+1)) {
		p = i+1;
		flagLast = false;
		break;
	}
}
if (flagLast) console.log('perdida: ' + (i+1));
else console.log('perdida: ' + p);
/*
if (flagLast) printf("%d\n", i+1);
else printf("%d\n", p);
*/

/*
10
5 8 3 7 10 1 6 4 2
*/