function sum(a, b){
    console.log(`Sum of a : ${a} + b : ${b} =  ${a+b}`);
}

sum(10, 20);

function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr; // The array is returned to the calling code.
}

var simpleArr = arrayBuilder('apple', 'pear', 'plum');
console.log(simpleArr);