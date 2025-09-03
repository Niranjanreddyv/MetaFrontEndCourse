const jsonToJsObject = '{"greeting" : "Hello" }';
console.log("---- JSON -----")
console.log(jsonToJsObject);
console.log("----- After convert from JSON to JS object ------");
const plainJsObject = JSON.parse(jsonToJsObject);
console.log(plainJsObject);
plainJsObject.greeting = "Hi";
console.log(plainJsObject);

console.log(" --- Convert Js object to JSON ---");

const user = {firstName : "rama", lastName : "raju", age : 25};

console.log("before convert : ", user);

const Json = JSON.stringify(user);
console.log("After convet : ", Json);


