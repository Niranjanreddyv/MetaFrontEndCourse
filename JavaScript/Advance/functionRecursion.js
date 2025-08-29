let count = 3;
//  recursion code have must base condition to stop code from infinite loop 
function counter(){
    if(count === 0) return;
    console.log(count--);
    counter();
}

counter();