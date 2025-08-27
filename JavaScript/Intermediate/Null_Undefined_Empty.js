// null
var word = 'abc';
console.log(word.match(/a/));
console.log(word.match(/d/)); // Null -> Null can occur when data is missing, unknown, or not applicable

let r = null;
console.log(r);
// undefined
var noise;
console.log(noise);
noise = "sound";
console.log(noise)


  var x;

  if(x === null) {
    console.log("null");
  } else if(x === undefined) {
    console.log("undefined");
  } else {
    console.log("ok");
  }

// empty value;
var a = '';
var b = "";
console.log(a);
console.log(b);
