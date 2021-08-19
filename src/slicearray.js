// Exemplo extrair nossos bons amigos, os cítricos, das frutas
var frutas = ['startsysex', 'command', 'pin', 'mode', 'state', 'opt1', 'opt2', 'endsysex'];
//var citricos = frutas.slice(1, 3); //estrai do segundo ao terceiro elemento, indices 1 e 2
var citricos = frutas.slice(2,-1);
//a partir do terceiro elemento, até o penúltimo elemento, ou seja,
//remove os extremos e o comando
console.info(citricos);