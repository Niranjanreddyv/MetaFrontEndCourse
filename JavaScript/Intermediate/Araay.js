let array = ['red', 'green', 'yellow', 'white', 'black', 'brown'];

// Array iterable -> iterable is just loop over an array or string
console.log(array[0]);
console.log(array[4]);
for(let i = 0; i<array.length; i++){
    console.log(array[i]);
}
// removed last index elements in array
console.log(array.pop());
console.log(array)


// arrays are objects in  javascript
var fruits = [];
fruits.push('apple');
fruits.push('mangos');
fruits.push('pear');
console.log(fruits);
fruits.pop();
console.log(fruits);
