// TypeScript Casting
// Casting is the process of overriding a type. 


 // Changing variable name from unknown to string ;


let names:unknown = "Aditya" ;
console.log((names as string).length) // using as keywords 


let quote : unknown= "India is my country" ;

console.log((<string>quote).length) // using <> Symbol 

/* force override the type using firstly convert into unknown then convert 
into anther data type */


let str = "JavaScript, often abbreviated JS, is a programming language that is one \
of the core technologies of the World Wide Web, alongside HTML and CSS."

console.log(((str as unknown) as string).length) // output = 143 

// console.log(((str as unknown) as number).length)  // output = property lenght does not exist on number


export{}
