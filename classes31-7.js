"use strict";
// class Employee {
//     id: number;
//     name: string;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
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
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
    }
    Car.prototype.run = function (speed) {
        if (speed === void 0) { speed = 0; }
        console.log("A " + this.name + " is moving at " + speed + " mph!");
    };
    return Car;
}());
var Mercedes = /** @class */ (function (_super) {
    __extends(Mercedes, _super);
    function Mercedes(name) {
        return _super.call(this, name) || this;
    }
    Mercedes.prototype.run = function (speed) {
        if (speed === void 0) { speed = 150; }
        console.log('A Mercedes started');
        _super.prototype.run.call(this, speed);
    };
    return Mercedes;
}(Car));
var Honda = /** @class */ (function (_super) {
    __extends(Honda, _super);
    function Honda(name) {
        return _super.call(this, name) || this;
    }
    Honda.prototype.run = function (speed) {
        if (speed === void 0) { speed = 100; }
        console.log('A Honda started');
        _super.prototype.run.call(this, speed);
    };
    return Honda;
}(Car));
var mercObj = new Mercedes("Mercedes-Benz GLA");
var hondaObj = new Honda("Honda City");
mercObj.run(); // A Mercedes started A Mercedes-Benz GLA is moving at 150 mph!
hondaObj.run(); // A Honda started A Honda City is moving at 100 mph!
//
var Department = /** @class */ (function () {
    function Department(name, id) {
        this.name = name;
        this.id = id;
        this.employees = [];
    }
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployee = function () {
        console.log(this.employees + ' ' + this.id);
    };
    return Department;
}());
var department = new Department("Finance", "Acc");
console.log(department.name);
department.addEmployee("Hanuman");
department.addEmployee("Aditya");
department.printEmployee();
