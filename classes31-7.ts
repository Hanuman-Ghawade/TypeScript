// class Employee {
//     id: number;
//     name: string;

//     constructor(id: number, name: string) {
//             this.name = name;
//             this.id = id;
//     }

//     getDetails(){
//         console.log(` The name of employee is ${this.name} & id is ${this.id}`)
//     }

//     getSalary() : number {
//         return 10000;
//     }
// }

// let emp = new Employee(1380,"Aditya")
// emp.getDetails()


class Car {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    run(speed: number = 0) {
        console.log("A " + this.name + " is moving at " + speed + " mph!");
    }
}

class Mercedes extends Car {

    constructor(name: string) {
        super(name);
    }

    run(speed = 150) {
        console.log('A Mercedes started')
        super.run(speed);
    }
}

class Honda extends Car {

    constructor(name: string) {
        super(name);
    }

    run(speed = 100) {
        console.log('A Honda started')
        super.run(speed);
    }
}

let mercObj = new Mercedes("Mercedes-Benz GLA");
let hondaObj = new Honda("Honda City")

mercObj.run();  // A Mercedes started A Mercedes-Benz GLA is moving at 150 mph!
hondaObj.run(); // A Honda started A Honda City is moving at 100 mph!

//

class Department{
    
    private employees : string[] = [];

    constructor (public name:string,public readonly id: string){
    }

    addEmployee(employee : string){
        this.employees.push(employee) ;

    }
    printEmployee(){
        console.log(this.employees +' '+this.id)

    }
}

let department = new Department("Finance","Acc");

console.log(department.name)
department.addEmployee("Hanuman") ;
department.addEmployee("Aditya")
department.printEmployee()




export{}