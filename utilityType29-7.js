// TypeScript Utility Types
/*
1.Partial
2.Requierd
3.Record
4.Pick
5.Exclude
6.return Type
7.Parameter
*/
// Partial
var personName = {
    name: "Aditya",
    age: 25
};
console.log(personName.age);
var car = {
    name: "Tata",
    model: "Safari",
    price: "15 L"
};
console.log(car.price);
// Record is a shortcut to defining an object type with a specific key type and value type.
var Animal = {
    "Dog legs": 4,
    "Human legs": 2
};
console.log(Animal);
var employee = {
    'Id': 1380
};
console.log(employee);
//  Pick removes all but the specified keys from an object type.
var employeesecond = {
    name: "Vishal",
    department: "Production"
};
console.log(employeesecond);
var Values = "Hanuman";
console.log(Values);
var point = {
    x: 10,
    y: 20
};
console.log(point);
