// Generics 
var arr = function (array) {
    return array[array.length - 1];
};
var arrFirst = arr([1, 2, 3, 4, 5]);
var arrSecond = arr(["a", "b", "c"]);
console.log(arrFirst);
console.log(arrSecond);
var newarr = function (x, y) {
    return [x, y];
};
var newarr_number = newarr(1, 2);
console.log(newarr_number);
var newarr_string = newarr("a", "b");
console.log(newarr_string);
var newarr_numnber_string = newarr("a", 5);
console.log(newarr_numnber_string);
var people = {
    name: "Amol",
    age: 25,
    height: 165
};
console.log(people);
