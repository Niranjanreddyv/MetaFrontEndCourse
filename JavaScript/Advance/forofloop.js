// array

let arr = ['a' , 'b', 'c', 'd'];
console.log("---- For of Loop -------")
for(let i of arr){
    console.log(i);
}
console.log("---- For in Loop -----");
for(const i in arr){
    console.log(i, arr[i]);
}

const colors = ['red','orange','yellow']
for (var color of colors) {
    console.log(color);
}

// object -> error -> TypeError: car is not iterable

// const car = {
//     speed: 100,
//     color: "blue"
// }

// for(prop of car) {
//     console.log(prop)
// }

const car = {
    speed : 15,
    color : 'red'
}

console.log(Object.keys(car)); // gaves keys in array
console.log(Object.values(car)); // values in array
console.log(Object.entries(car)); // gave [[key, value] , ......] 

// for of objects
for(let key of Object.keys(car)){
    console.log(key , ':' , car[key]);
}

// 
const car1 = Object.create(car);
car1.name = "tata";
console.log("---- car1 object ---------- ");
console.log("car1 ", car1);

console.log('------ For In Loop Started -----') // it iterate on it prototype aslo
for(key in car1){
    console.log(key ," : " , car1[key]);
}

console.log(" ------- For Of loop started ------"); // not iterate on it prototype
for(key of Object.keys(car1)){
    console.log(key ," : ", car1[key]);
}
