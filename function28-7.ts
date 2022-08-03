// TypeScript Functions

// function return Types 

function division(a,b):number {
    return a / b

}
console.log(division(10,5))

// function parameter with data types 

function multiplication(a:number,b:number){
    return  a * b
}
console.log(multiplication(10,10))

 // function with optional Parameter 

 function addition(a:number,b:number,c?:number){
    return  a + b + (c || 0)
}
console.log(addition(10,10,30))


// Default Parameter 

function subtraction(a:number= 60,b:number ){
    return  a - b  ;
} 
console.log(subtraction(70,40))


// function with name parameter 

function sum ({firstValue, secondValue }:{firstValue : number,secondValue : number}){
    return firstValue + secondValue ;

}

console.log(sum({secondValue : 25,firstValue: 100}))
 
// function with rest parameter

function summation (a:number,b:number,...rest:number[]){
    return a + b + rest.reduce((c,d) => c + d,0 )

}
console.log(summation(10,20,30))



export{}