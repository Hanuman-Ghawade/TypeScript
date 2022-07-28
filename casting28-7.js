// TypeScript Casting
// Casting is the process of overriding a type. 
// Changing variable name from unknown to string ;
var names = "Aditya";
console.log(names.length); // using as keywords 
var quote = "India is my country";
console.log(quote.length); // using <> Symbol 
/* force override the type using firstly convert into unknown then convert
into anther data type */
var str = "JavaScript, often abbreviated JS, is a programming language that is one \
of the core technologies of the World Wide Web, alongside HTML and CSS.";
console.log(str.length); // output = 143 
console.log(str.length); // output = property lenght does not exist on number
