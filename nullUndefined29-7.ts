// null and undefined are primitive types and can be used like other types, such as string.

let names : string | undefined | null  = undefined ;

console.log(typeof names) // value = null , output  = object 
console.log(typeof names)  // value = undefined , output = undefined

// nullish Coalescence 

function carSpeed (speed:number |null| undefined){
    console.log(`The Speed of car is ${speed ?? 'Unknown'}`)
}

carSpeed(undefined)


// Null insertion  we use ! keyword.

function information():string | undefined{
    return  "";
}

let info = information() ;
console.log("The lenght of info is "+ info!.length)


// Array bound Handling 


let array : number[] = [1,2,3,4,.5,6,7,8,9];

let value = array[10] ;

console.log(value) // undefined 

