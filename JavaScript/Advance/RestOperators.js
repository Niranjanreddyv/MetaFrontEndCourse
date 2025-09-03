// Collects values into an array/object

// array
const [first, second, ...others] = [1, 2, 3, 4, 5];

console.log(first);  // 1
console.log(second); // 2
console.log(others); // [3, 4, 5] collects all remaining elements.

// object

const person = { name: "Rama", age: 25, city: "Ayodhya" };
const { name, ...details } = person;

console.log(name);    // "Rama"
console.log(details); // { age: 25, city: "Ayodhya" }