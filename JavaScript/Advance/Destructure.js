// Object Destructuring
let person = {
    name : "Rama",
    age : 25,
    city : "Chennai"
}

let {name1 , age } = person;
console.log(name1);
console.log(age);

// Array Destructuring

let numbers = [1,2,3];
const [first, second] = numbers;
console.log(first);
console.log(second);

// Destructuring in Function Parameters

function printUser({name, age}){
    console.log(`${name} is ${age} years old.`);    
}
const user1 = {name : "Hari", age : 30};
printUser(user1);

// Destructuring with Default Values
const user = {username : "Krishna"};
const {username, role = 'guest'} = user;
console.log(username);
console.log(role);

// Nested Destructuring
const employee = {
    id: 101,
    details: {
        name: "Sita",
        department: "HR"
    }
};

const { details: { name, department } } = employee;
console.log(name);
console.log(department);