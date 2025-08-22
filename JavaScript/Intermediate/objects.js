let table = {legs : 4, color : "black", price : 20000};
console.log(table);

var house = {rooms : 3, color : "white" , price : 2000000};
console.log(house);

var house2 = {};
house2.rooms = 4;
house2.color = "green";
house2.price = 1500000;
console.log(house2);

// update object
house2.color = "pink";
console.log(house2);

// another way of create object

var house3 = {};
// house3.color = "red"; // this also one way
// console.log(house3);
house3["rooms"] = 4;
house3['color']= "blue";
house3["priceUSD"] = 12345;
console.log(house3);

// intresting usefull way

var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}