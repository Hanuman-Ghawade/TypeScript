
 // Variable name declaration in typescript 

 // String types
var msg : string = "Hello World " ;
console.log("Message : ",msg)

// Number Types
var num :number = 20 ;
console.log("Number : ",num)

// Boolean types 
var isGreater : boolean  = true;
console.log(isGreater)

// Array Types

 // 1. String type array
var names : string[] = [] ;
names.push("Hanuman","Ghawade") ;
console.log(names) ;

// 2. Number Type Array
var number : number[] = [] ;
number.push(2,3,4,5) ;
console.log(number)


// 3. Boolean type Array 

var trueFalse : boolean[] = [] ;
trueFalse.push(true) ;
console.log(trueFalse)


// 4.Any Type array 

var anything : any [] = [];
anything.push("Hanuman",28,true) // We can assign any value to tuple using any type.
console.log(anything)

// 5 . array with readonly .We can't change the value of array 
var array : readonly string[] =  ["Hanuman"] ;
array.push("Ghawade")  // we can't push value in readonly array 
console.log(array)

var value : number = [1,2,3,4,5]
value.push(5);
console.log(value)

// Never with data types 

var anyValue : never  =  " Hello" ; // // Never effectively throws an error whenever it is defined.
console.log("Number : ",anyValue)


// Undefined & null dataypes 

var username : undefined = undefined ;
console.log(username)

var user : null = null ;
console.log(user)

// Tuples in data types 
// Tuples are used only for intitial value 
// We can also make readonly tuple where we can't change the value of the tuple

var tuple : [number,string,boolean] ;
tuple = [25,"Hello",true] ;
tuple.push("world")
console.log(tuple)


// Typescript  object types 

const personObject : { name: string, age: number, education: string } = {
    name :"Aditya",
    age: 26 ,
    education: "Engieering"
  };
  
  console.log(personObject);

  
//  Option properties with object

const school :{name : string ; adress : string; since ? : number} = {
    name : "Nath High School Nathapur" ,
    adress : "Beed"
}
school.since = 1995 ;
console.log(school)

// 
export {}