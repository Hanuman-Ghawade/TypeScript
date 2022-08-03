// TypeScript Enums
// An enum is a special "class" that represents a group of constants (unchangeable variables).
// enum with Without value
var coordinate;
(function (coordinate) {
    coordinate[coordinate["a"] = 0] = "a";
    coordinate[coordinate["b"] = 1] = "b";
    coordinate[coordinate["c"] = 2] = "c";
    coordinate[coordinate["d"] = 3] = "d";
})(coordinate || (coordinate = {}));
// let currentCoordinate = coordinate.a ; output : 0
// let currentCoordinate = coordinate.b ; output : 1
// let currentCoordinate = coordinate.c ; output : 2
var currentCoordinate = coordinate.d; // output : 3
console.log(currentCoordinate);
// Enum With intial value 
var triangle;
(function (triangle) {
    triangle[triangle["x"] = 0] = "x";
    triangle[triangle["y"] = 20] = "y";
    triangle[triangle["z"] = 21] = "z";
})(triangle || (triangle = {}));
// let side = triangle.x ; output : 0
var side = triangle.y; // output : 20
// let side = triangle.z ; output : 21
console.log(side);
// Enum with fully intialized 
var rectangular;
(function (rectangular) {
    rectangular[rectangular["side_a"] = 20] = "side_a";
    rectangular[rectangular["side_b"] = 30] = "side_b";
    rectangular[rectangular["side_c"] = 40] = "side_c";
    rectangular[rectangular["side_d"] = 41] = "side_d";
})(rectangular || (rectangular = {}));
// let rectaSide = rectangular.side_a ;     output : 20
// // let rectaSide = rectangular.side_b ;  output : 30
// let rectaSide = rectangular.side_c ;     output : 40 
var rectaSide = rectangular.side_d; //    output : 41
console.log(rectaSide);
// String Enum 
var city;
(function (city) {
    city["cityFirst"] = "Pune";
    city["citySecond"] = "Delhi";
    city["cityThird"] = "Mumbai";
    city["cityForth"] = "Nashik";
})(city || (city = {}));
var citywise = city.cityFirst;
console.log(citywise);
