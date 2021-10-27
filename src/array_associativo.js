// array associativo
var carros = [ ]
carros.push({modelo: 'fiesta', preco: '10000'})
carros.push({modelo:'hb20s', preco: '55000'})
//carros[0].preco
//carros[1]['modelo']

/*
Esse método caminha por todas as 
propriedades enumeráveis de um objeto 
e sua cadeia de protótipos
*/
for (var i in carros) {
	console.log('registro ' + i + '\n-------------')
	for (var j in carros[i]) {
		console.log(j + ':' + carros[i][j]);
	}
	console.log('-------------')
}
/*
Em JavaScript, quase tudo é um objeto. Todos os tipos primitivos - com exceção de null e undefined - são tratados como objetos. Eles podem receber propriedades (propriedades atribuídas de alguns tipos não são persistentes), e possuem todas as características de objetos.
*/
var computador = new Object();
	computador.cpu = "Inteli7";
	computador.ram = 8; //GB
	computador.mem_sec = 256; //GB
	computador.tipo_mem_sec = 'ssd';