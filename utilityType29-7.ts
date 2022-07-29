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

interface Person { 
    name : string ,
    age : number ,
    city : string
}

let personName : Partial<Person> = {
    name : "Aditya",
    age : 25 ,
    
} ;

console.log(personName.age)


//  Requires Properties 

interface Car {
    name: string,
    model: string,
    price?:string
}

let car : Required<Car> ={
    name: "Tata",
    model:"Safari",
    price: "15 L"
}

console.log(car.price)

 // Record is a shortcut to defining an object type with a specific key type and value type.

let Animal : Record<string,number>  = {
    "Dog legs" : 4,
    "Human legs" :2
}

console.log(Animal)

// Omit removes keys from an object type.

interface Employee {
    Id : number ,
    name: string,
    department : string 
}

let employee:Omit<Employee,'name'|'department'> = {
    'Id' : 1380 ,

}
console.log(employee)

//  Pick removes all but the specified keys from an object type.

let employeesecond:Pick<Employee,'name'|'department'> = {
    name : "Vishal",
    department  :"Production"

}
console.log(employeesecond)

// Exclude removes types from a union.

type dataType = string | number | boolean ;

let Values: Exclude<dataType,boolean> = "Hanuman" ;

console.log(Values)

// ReturnType extracts the return type of a function type.

type PointGenerator = () => { x: number; y: number; };
const point: ReturnType<PointGenerator> = {
  x: 10,
  y: 20
};

console.log(point)


