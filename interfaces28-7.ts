// TypeScript Type Aliases and Interfaces

// Types Aliases

// types in variable declare 
type varType = number ;

function addition (a:varType ,b : varType){
  return a + b ;

}
console.log(addition(5,10))

//  types in Object declaration 

type name  = string ;
type age = number ;
type city = string ;
type education = string ;

type Person ={
  name  : name,
  age : age,
  city : city ,
  education : education ,
}

const name : name = "Hanuman" ;
const person : Person  = {
  name : name ,
  age : 28 ,
  city : "Pune" ,
  education : "Engineering" ,
}
console.log(person)

// types aliesas in array 

type arr  = number | string ;
const tree : arr[] = [] ;
tree.push(25,"")
console.log(tree)

// Interfaces 
//  Interfaces are similar to type aliases, except they only apply to object types.


interface School {
  name : string ,
  address  : string ,
  since : number ,
}
const school : School  = {
  name : "Dr D Y Patil School ",
  address : "Pune",
  since : 1950 ,
}
console.log(school)


// we Can reuse the same properties in other object & also  add some new properites

interface  Collage extends  School {
  fees : number ,
}

const collage : Collage = { 
  name :"Deccan",
  address : "Pune",
  since : 1980,
  fees : 15000 ,
}

console.log(collage)





export{}