// try{
//     console.log(c+b);
// }catch(err){
//     console.log(err);
//     console.log("there was a error");
//     console.log("the error was saved in the err log");
// }
// console.log("my program not stop")

// here  program not stop
// try{
//     throw console.log(c+b);
// }catch(err){
//     // console.log(err);
//     console.log("there was a error");
//     console.log("the error was saved in the err log");
// }
// console.log("my program not stop")

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return Math.floor(a / b);
}

try {
  console.log(divide(5, 0));
} catch (error) {
  console.error(error.message); // Division by zero is not allowed.
}
console.log("Hi");


// throw new Error();
// console.log("Hello");


try {
throw new Error();
console.log('Hello');
} catch(err) {
    console.log('Goodbye');
}


try {
Number(5).toPrecision(300)
} catch(e) {
    console.log(e);
    console.log("There was an error");
}
  