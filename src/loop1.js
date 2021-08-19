var N = 4;  
while (N % 2 == 0) {
	if (N > 20) break;
	console.log("01");
         N += 2;  
} 
console.log(`Consegui sair…com N=${N}`); // acesso à variável com ${} - usar crase
//console.log("Consegui sair com N = %d", N); //similar ao printf
//console.log("Consegui sair com N = ", N);
