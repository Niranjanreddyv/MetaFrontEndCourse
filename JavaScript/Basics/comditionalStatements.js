let result = 40;
if(result > 40){
    console.log("you passed the test");
}
else{
    console.log("you did not pass the test");
}

let place = 'first';

if(place = 'first'){
    console.log("gold");
}
else if(place == 'second'){
    console.log("silver");
}else if(place == 'third'){
    console.log("bronze");
}
else{
    console.log("No medal");
}

let light = 'orange';

switch(light) {
   case 'green':
       console.log("Drive");
       break;
   case 'orange':
       console.log("Get ready");
       break;
   case 'red':
       console.log("Don't drive");
       break;
   default:
       //this block will run if no condition matches
       console.log('The light is not green, orange, or red');
}