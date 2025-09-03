let arr = [1,2,3,4,5,6];
console.log("---- for Each Loop -----");
arr.forEach((num, idx) => {
    console.log(idx, num);
})
arr.forEach(num => console.log(num));

console.log("----- filter -------")
const evenNumbers = arr.filter(num => num % 2 === 0);
console.log(evenNumbers);

console.log('----- map ----');
const squares = arr.map(num => num*num);
console.log(squares);

// mutable -> changes after the some operation 
// immutable -> can't change once declared it
