"use strict";
// Variable name declaration in typescript 
exports.__esModule = true;
// String types
var msg = "Hello World ";
console.log("Message : ", msg);
// Number Types
var num = 20;
console.log("Number : ", num);
// Boolean types 
var isGreater = true;
console.log(isGreater);
// Array Types
// 1. String type array
var names = [];
names.push("Hanuman", "Ghawade");
console.log(names);
// 2. Number Type Array
var number = [];
number.push(2, 3, 4, 5);
console.log(number);
// 3. Boolean type Array 
var trueFalse = [];
trueFalse.push(true);
console.log(trueFalse);
// 4.Any Type array 
var anything = [];
anything.push("Hanuman", 28, true);
console.log(anything);
// 5 . array with readonly .We can't change the value of array 
// var array : readonly string[] =  ["Hanuman"] ;
// array.push("Ghawade")
// console.log(array)
// var value : number = [1,2,3,4,5]
// value.push(5);
// console.log(value)
// Never with data types 
// Never effectively throws an error whenever it is defined.
// var anyValue : never  =  " Hello" ;
// console.log("Number : ",anyValue)
// Undefined & null dataypes 
var username = undefined;
console.log(username);
var user = null;
console.log(user);
// Tuples in data types 
// Tuples are used only for intitial value 
// We can also make readonly tuple where we can't change the value of the tuple
var tuple;
tuple = [25, "Hello", true];
tuple.push("world");
console.log(tuple);
// Typescript  object types 
var personObject = {
    name: "Aditya",
    age: 26,
    education: "Engieering"
};
console.log(personObject);
//  Option properties with object
var school = {
    name: "Nath High School Nathapur",
    adress: "Beed"
};
school.since = 1995;
console.log(school);
