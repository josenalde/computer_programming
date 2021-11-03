// Prof. Josenalde Oliveira
let s = 'Josenalde Barbosa de Oliveira'
let v_s = s.split(' ');
let i_s = v_s[0];
let f_s = v_s.pop();
let n_cracha = i_s + ' ' + f_s;
console.log('Método 1: ' + n_cracha)

i_1 = s.indexOf(' ');
i_s = s.substr(0, i_1);
i_2 = s.lastIndexOf(' ');
f_s = s.substr(i_2);
n_cracha = i_s + f_s;
console.log('Método 2: ' + n_cracha)