//DECLARAR
var x1, x2, x3, op; //VARIÁVEIS VISIVEIS A TODOS OS CASOS (globais)
console.log('Menu');
console.log('1: maior\n2: menor\n3: media aritmetica\n4: media geometrica');
console.log('5: media ponderada');
//LER
op = parseInt(prompt('O que deseja: '));
x1 = parseFloat(prompt('x1: '));
x2 = parseFloat(prompt('x2: '));
x3 = parseFloat(prompt('x3: '));

//ESCOLHA
switch(op) {
	case 1: {
		var maior; //LOCAL
		if (x1>x2 && x1>x3) maior = x1;
		else if (x2>x1 && x2>x3) maior = x2;
		else maior = x3;
		console.log('Maior: %f', maior.toFixed(2));
		break;
	}
	case 2: {
		var menor; //LOCAL
		if (x1<x2 && x1<x3) menor = x1;
		else if (x2<x1 && x2<x3) menor = x2;
		else menor = x3;
		console.log('Menor: %f', menor.toFixed(2));
		break;
	}
	case 3: {
		var m;
		m = (x1 + x2 + x3)/3;
		console.log('Media Aritmetica: %f', m.toFixed(2));
		break;
	}
	case 4: {
		var m;
		m = (x1*x2*x3)**(1/3); //raiz cubica do produto dos valores
		console.log('Media Geométrica: %f', m.toFixed(2));
		break;
	}
	case 5: {
		var m,p1=4,p2=5,p3=6;
		m = (x1*p1 + x2*p2 + x3*p3)/(p1+p2+p3);
		console.log('Media Ponderada: %f', m.toFixed(2));
		break;
	}
	default: console.log('Opção inválida...');
}

