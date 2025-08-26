let a = "Jhon";
let b = "doe";
console.log(a+b);
console.log(a.length)
console.log(a[0]);
console.log(a[1]);
console.log(a.charAt(2));
console.log(a.toUpperCase());
console.log(a);
console.log(a.toLowerCase());
console.log(a.concat(b));

// console.log(a.pop()) // it not work like a array


let c = 'wo'.concat('rl').concat('d');
console.log(c);

let d = "ho-ho-ho";
// first index
console.log(d.indexOf('h')); 
console.log(d.indexOf('o')); 
console.log(d.indexOf('-'));
// last index
console.log(d.lastIndexOf('h')) 
console.log(d.lastIndexOf('o')) 
console.log(d.lastIndexOf('-')) 

// split -> stored valuels in array
let e = d.split('-');
console.log(e);