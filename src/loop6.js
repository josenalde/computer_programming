var scanf = require('scanf');
var c,r;
do {
	console.log("Digite um caracter para saber o ascii associado: ");
	c = scanf("%c");  
	console.log(c.charCodeAt(0));
	console.log("quer repetir (s/n)): ");
	 r = scanf("%c"); 
} while(r != 'n' && r != 'N');





