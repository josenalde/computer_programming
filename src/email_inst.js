let s = 'Josenalde Barbosa da Oliveira';
//s = 'João Manoel Santos';
//s = 'Maria Emília de Oliveira Silva';
//s = 'Joana Santana Alves';
//s = 'Frederico Silva dos Santos e Silva';
//s = 'Josenalde Barbosa da Oliveira';
s = 'Joana Ermelinda da Costa e Silva'

var sT = s.replace(/( das| dos| de| do| da| e)/g, '');
//sT
let vS = sT.split(' ');
//vS
let lastName = vS.pop().toLowerCase();
//lastName
let email = '';
for (let i=0; i < vS.length; i++) {
	email += vS[i].charAt(0).toLowerCase();
}
email += lastName + '@ufrn.edu.br'
console.log(email)