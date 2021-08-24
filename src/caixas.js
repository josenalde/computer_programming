var a, b, c, nViagens; //declara variáveis
//para OBI
scanf("%d%d%d","a","b","c"); //%d é o identificador de inteiro
/*
a = parseInt(prompt()); //leia(a), onde a é um inteiro
b = parseInt(prompt()); //a função prompt() retorna texto
c = parseInt(prompt()); //e precisa converter para inteiro
*/
if (a < b)
    if (b < c)
        nViagens = 1; // a<b<c: v1: a vai dentro de b que vai dentro de c   
    else 
        nViagens = 2; // v1: a vai dentro de b, v2: c
else if (b < c)
    if (a+b < c)
        nViagens = 1; // v1: a e b lado a lado dentro de c
    else
        nViagens = 2; // v1: b vai dentro de c, v2: leva apenas a
else
    nViagens = 3; // v1: leva a, v2: leva b, v3: leva c
//para OBI
printf("%d", nViagens);
//console.log(nViagens);
