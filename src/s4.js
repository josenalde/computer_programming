var scanf = require('scanf');
var a = 2;
var b = 'estou na eaj';
var c = 1.45;
console.log(a);
console.log('Valor de a: %d', a);
console.log('Valor de a: ', a);
console.log('a: %d e c: %f', a, c);
console.log('Qual seu nome: ');
var nome = scanf('%s');
console.log('Oi, bom dia, %s', nome);
// concatenação de texto com número