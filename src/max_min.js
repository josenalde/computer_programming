//número inteiro aleatório entre min e max
function getRandom(min, max) { 
   return Math.floor(Math.random() * (max - min + 1)) + min; } 

let a = []; 
for (let i = 0 ; i < 10 ; i++) { 
    a.push(getRandom(-9,9)); 
} 
console.log(a);
maior = Math.max.apply(null, a); //ou min
console.log(maior)