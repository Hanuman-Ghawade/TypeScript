"use strict";
exports.__esModule = true;
var Bank = /** @class */ (function () {
    function Bank(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.balance = 0;
    }
    Bank.prototype.userDetails = function () {
        console.log("The name of user is ".concat(this.name));
        console.log("The age of user is ".concat(this.age));
        console.log("Gender of user is ".concat(this.gender));
    };
    Bank.prototype.deposit = function (amount) {
        this.amount = amount;
        this.balance = this.balance + this.amount;
        // console.log(`You have deposited Rs ${this.amount} in your account .`)
    };
    Bank.prototype.withdraw = function (amount) {
        this.amount = amount;
        if (this.amount > this.balance) {
            console.log("Insuffient fund");
        }
        else {
            this.balance = this.balance - this.amount;
            // console.log(`The remaining balance your in account  Rs  ${this.balance}`)
        }
    };
    Bank.prototype.view_balance = function () {
        console.log("The amount in your account is ".concat(this.balance));
    };
    return Bank;
}());
var bankDetails = new Bank("Hanuman", 28, "Male");
// bankDetails.userDetails() ;
bankDetails.deposit(5000);
bankDetails.withdraw(6000);
