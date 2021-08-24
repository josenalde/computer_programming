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
        nViagens = 1;
    else nViagens = 2;
else if (b < c)
    if (a+b < c)
        nViagens = 1;
    else
        nViagens = 2;
else
    nViagens = 3;
//para OBI
printf("%d", nViagens);
//console.log(nViagens);
