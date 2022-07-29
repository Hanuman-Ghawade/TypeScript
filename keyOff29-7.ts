// TypeScript Keyof 

type Person = {
    name : string,
    age : number ,
    eduction : string
}

const person = {
    name : "Hanuman",
    age : 28,
    eduction : "ENgineering"
}

type  names = keyof typeof person ;

console.log(names)

export{}


// Incomplete topic 

