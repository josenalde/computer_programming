var scanf = require('scanf');
//importa biblioteca scanf para leitura no console
var N, Y, Z;
[N,Y,Z] = scanf('%d %f %d'); //leia(N)
if (N>0 && Z>Y && Y>=0 && Z>0) {
    var Q = (Z-Y)/N;
    console.log('Uma caneta custa: R$', Q.toFixed(2));
} else {
    console.log('Valores incorretos');
}

 

