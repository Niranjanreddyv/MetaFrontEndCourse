
// 0.00 t0 0.99
var decimal = Math.random();
console.log(decimal);
console.log(decimal*10);

// round of
const number = 12.3456;
const roundedString = number.toFixed(2); // "12.35"
console.log(roundedString);
const roundedNumber = parseFloat(roundedString); // 12.35 (to convert back to a number)
console.log(roundedNumber);

// imp
const number1 = 12.3456;
const rounded = Math.round(number1 * 100) / 100; // 12.35
console.log(rounded);

console.log(Math.PI);
console.log(Math.ceil(3.7)); // 4 for greater one
console.log(Math.ceil(-2.7)); // -2
console.log(Math.floor(3.7)); // 3 for least one
console.log(Math.floor(-2.7)); // -3
console.log(Math.round(2.57903)); // rounds up to the closest integer if the decimal is .5 or above; otherwise, rounds down to the closest integer 
console.log(Math.round(2.47903));
console.log(Math.trunc(2.57903)); // trims the decimal, leaving only the integer
console.log(Math.pow(2,3));
console.log(Math.sqrt(9));
console.log(Math.cbrt(8));
console.log(Math.abs(-10));
console.log(Math.min(15,7,8,9));
console.log(Math.max(3,5,8,9));