//número inteiro aleatório entre min e max
function getRandom(min, max) { 
   return Math.floor(Math.random() * (max - min + 1)) + min; } 

let a = []; 
for (let i = 0 ; i < 10 ; i++) { 
    a.push(getRandom(-9,9)); //o resultado da função getRandom é inserido no array
} 
console.log(a);
maior = Math.max.apply(null, a); //ou min
// o método Math.max se aplica para listas de números, como Math.max(1,20,5,10), mas não com objetos array como parâmetros
console.log(maior)
