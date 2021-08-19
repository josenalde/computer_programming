//var scanf = require('scanf'); apenas OBI
/*P: n. de folhas total da diretora
  C: n. de competidores  
  F: n. de folhas por competidor
*/
var C, P, F; //declara variável
//[C, P, F] = scanf('%d%d%d');
var C = parseInt(prompt()); //lê inteiros
var P = parseInt(prompt());
var F = parseInt(prompt());
var t1, t2, t3;
//testes lógicos em C, P, F
t1 = 1<=C && C<=1000; //V ou F
     // 1<=C<=1000
t2 = 1<=P && P<=1000;
t3 = 1<=F && F<=1000;
if (t1 && t2 && t3) {
    if (C*F <= P) {
        console.log('S');
    } else console.log('N');
}





