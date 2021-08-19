var scanf = require('scanf'); //para OBI não é necessário importar módulo, dá erro
//https://www.npmjs.com/package/printf
//npm install printf
var printf = require('printf');
var C, P, F;
//C = scanf('%d'); //obi aceita scanf('%d%d%d', 'C', 'P', 'F');
//P = scanf('%d');
//F = scanf('%d');
scanf('%d%d%d', 'C', 'P', 'F');
if (C*F <= P) console.log('S');
//else console.log('N');
else printf("N", '%s');

/* Na OBI, printf está carregado e ativo no node.js,
   contudo, pode-se usar o console.log para exibir */

