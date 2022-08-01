
// Generics 
const arr  = <T>(array:T[]):T =>{
    return array[array.length-1]

}

let arrFirst = arr([1,2,3,4,5])

let arrSecond = arr(["a","b","c"])

console.log(arrFirst)
console.log(arrSecond)

let newarr = <X,Y>(x : X,y:Y):[X,Y] =>{
    return [x,y]
}

let newarr_number = newarr(1,2) ;

console.log(newarr_number)

let newarr_string = newarr("a","b")
console.log(newarr_string)

let newarr_numnber_string = newarr("a",5)
console.log(newarr_numnber_string)


// generics in interfaces

interface People <T>{
    name : string,
    age: number,
    height : T ,
}


const people:People<number>  =  {
    name:"Amol",
    age: 25,
    height: 165 ,

}
console.log(people)






