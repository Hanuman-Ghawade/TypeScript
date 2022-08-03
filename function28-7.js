// TypeScript Functions
// function return Types 
function division(a, b) {
    return a / b;
}
console.log(division(10, 5));
// function parameter with data types 
function multiplication(a, b) {
    return a * b;
}
console.log(multiplication(10, 10));
// function with optional Parameter 
function addition(a, b, c) {
    return a + b + (c || 0);
}
console.log(addition(10, 10, 30));
// Default Parameter 
function subtraction(a, b) {
    if (a === void 0) { a = 60; }
    return a - b;
}
console.log(subtraction(70, 40));
// function with name parameter 
function sum(_a) {
    var firstValue = _a.firstValue, secondValue = _a.secondValue;
    return firstValue + secondValue;
}
console.log(sum({ secondValue: 25, firstValue: 100 }));
// function with rest parameter
function summation(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return a + b + rest.reduce(function (c, d) { return c + d; }, 0);
}
console.log(summation(10, 20, 30));
