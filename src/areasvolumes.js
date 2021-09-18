var op1, op2, A, V;
console.log('Menu Principal\n---------------');
console.log('1 Calculo de áreas\n2 Volume de solidos');
op1 = parseInt(prompt('O que deseja (1 ou 2)'));
if (op1 == 1) {
	console.log('Menu de área de figuras\n----------------------');
	console.log('a retângulo\nb círculo\nc triângulo\nd trapézio');
	op2 = prompt('Que figura deseja? (a, b, c ou d)');	
	switch(op2) {
		case 'a': {
			var b, h;
			b = parseFloat(prompt('base (cm): '));
			h = parseFloat(prompt('altura (cm): '));
			if (b > 0 && !isNaN(b) && h > 0  && !isNaN(h)) {
				A = b*h;
				console.log('Área: %f cm2', A.toFixed(2));
			}
		}
		case 'b': {
			var r;
			r = parseFloat(prompt('raio (cm): '));
			if (r > 0 && !isNaN(r)) {
				A = Math.PI*(r**2);
				console.log('Área: %f cm2', A.toFixed(2));
			}
		}
		case 'c': {
			var b, h;
			b = parseFloat(prompt('base (cm): '));
			h = parseFloat(prompt('altura (cm): '));
			if (b > 0 && !isNaN(b) && h > 0  && !isNaN(h)) {
				A = (b*h)/2;
				console.log('Área: %f cm2', A.toFixed(2));
			}
		}
		case 'd': {
			var B, b, h;
			B = parseFloat(prompt('base maior (cm): '));
			b = parseFloat(prompt('base menor (cm): '));
			h = parseFloat(prompt('altura (cm): '));
			if (B > 0 && !isNaN(B) && b > 0 && !isNaN(b) && h > 0  && !isNaN(h)) {
				A = ((B+b)*h)/2;
				console.log('Área: %f cm2', A.toFixed(2));
			}
		}
		default: console.log('Area de figura invalida');
	}	
} else if (op1 == 2) {
	// INCLUIR MENU DOS VOLUMES E SWITCH COM OP2 (a) / (b)
} else console.log('Opção inválida. Só pode 1 ou 2');
