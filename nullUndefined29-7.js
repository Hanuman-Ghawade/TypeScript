// null and undefined are primitive types and can be used like other types, such as string.
var names = undefined;
console.log(typeof names); // value = null , output  = object 
console.log(typeof names); // value = undefined , output = undefined
// nullish Coalescence 
function carSpeed(speed) {
    console.log("The Speed of car is ".concat(speed !== null && speed !== void 0 ? speed : 'Unknown'));
}
carSpeed(undefined);
// Null insertion  we use ! keyword.
function information() {
    return "";
}
var info = information();
console.log("The lenght of info is " + info.length);
// Array bound Handling 
var array = [1, 2, 3, 4, .5, 6, 7, 8, 9];
var value = array[10];
console.log(value);
