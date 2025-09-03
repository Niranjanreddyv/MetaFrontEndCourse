// Expands values out of an array/object
// array
const arr1 = [1, 2, 3];
const arr2 = [4, 5];

const combined = [...arr1, ...arr2];
console.log(combined);

// copy

const nums = [10, 20, 30];
const copy = [...nums];
console.log(copy);

// object
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3 };

const merged = { ...obj1, ...obj2 };
console.log(merged);

// override

const user = { name: "Rama", age: 25 };
const updated = { ...user, age: 26 };
console.log(updated);
console.log(user);
console.log(user.age);
console.log(updated.age);

// function
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers)); // Expands values out of an array/object