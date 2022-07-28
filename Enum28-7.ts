// TypeScript Enums
// An enum is a special "class" that represents a group of constants (unchangeable variables).

// enum with Without value

enum coordinate {
    a,
    b,
    c,
    d
}

// let currentCoordinate = coordinate.a ; output : 0
// let currentCoordinate = coordinate.b ; output : 1
// let currentCoordinate = coordinate.c ; output : 2
let currentCoordinate = coordinate.d ; // output : 3
console.log(currentCoordinate)

 // Enum With intial value 

 enum triangle {
    x ,
    y = 20,
    z,
}

// let side = triangle.x ; output : 0
let side = triangle.y ; // output : 20
// let side = triangle.z ; output : 21
console.log(side)


// Enum with fully intialized 


enum rectangular {
    side_a = 20 ,
    side_b = 30 ,
    side_c = 40 ,
    side_d , 

}

// let rectaSide = rectangular.side_a ;     output : 20
// // let rectaSide = rectangular.side_b ;  output : 30
// let rectaSide = rectangular.side_c ;     output : 40 
let rectaSide = rectangular.side_d ;  //    output : 41
console.log(rectaSide)


// String Enum 

enum city { 
    cityFirst = "Pune",
    citySecond = "Delhi",
    cityThird = "Mumbai",
    cityForth = "Nashik",

}
let citywise = city.cityFirst; // ouput : Pune
// city.citySecond = "Latur" ; //We can't assign the value to enum string it will throw error
console.log(citywise)



export{}