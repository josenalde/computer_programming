var P = 1, A, B, i; //loop4.js
var scanf = require('scanf');
[A, B] = scanf("%d %d");
i = A;  
//entre A e B, inclusive
while (i <= B) { 
	if (i % 2 == 0) P *= i;
	i++;
} 
console.log("P= ", P);



