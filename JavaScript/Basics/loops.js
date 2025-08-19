
console.log("for loop start : ");
for(let i = 0;i<=5;i++){
    console.log(i);
}

console.log("while loop start : ");
var i = 3;
while(i>0){
    console.log(i);
    i--;
}

console.log(!false);

/* 

1. for loop:
The for loop is used when the number of iterations is known or can be determined beforehand.
JavaScript

for (initialExpression; condition; updateExpression) {
  // code to be executed repeatedly
}

initialExpression: Executed once before the loop starts, typically to initialize a counter variable.
condition: Evaluated before each iteration. If true, the loop body executes; if false, the loop terminates.
updateExpression: Executed after each iteration, typically to increment or decrement the counter.


2. while loop:
The while loop executes a block of code as long as a specified condition remains true. 
JavaScript

while (condition) {
  // code to be executed repeatedly
}
condition: Evaluated before each iteration. If true, the loop body executes; if false, the loop terminates. 
The condition must eventually become false to avoid an infinite loop.

*/