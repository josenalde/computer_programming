var scanf = require('scanf');
var S = 0, A, B, i;
[A, B] = scanf("%d %d");
i = A;  
//entre A e B, inclusive
while (i <= B) { 
	if (i % 2 != 0) S += i;
	i++;
} 
console.log("S = ", S);


