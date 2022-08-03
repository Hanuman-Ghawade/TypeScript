
class Bank {
    balance: number;
    amount :number ;
    name : string ;
    age : number ;
    gender : string ;
    
    constructor(name:string ,age: number , gender:string ) {
        this.name = name ;
        this.age = age ;
        this.gender = gender ; 
        this.balance = 0;

    }

    userDetails(){
        console.log(`The name of user is ${this.name}`) ;
        console.log(`The age of user is ${this.age}`) ;
        console.log(`Gender of user is ${this.gender}`) ;
    }

    deposit(amount:number){
        this.amount = amount 
        this.balance = this.balance + this.amount ;
        // console.log(`You have deposited Rs ${this.amount} in your account .`)

    }

    withdraw(amount:number){
        this.amount = amount ;
        if (this.amount > this.balance) {
            console.log(`Insuffient fund`) ;
        } else {
            this.balance = this.balance - this.amount ;
            // console.log(`The remaining balance your in account  Rs  ${this.balance}`)
        }
    }

    view_balance(){
        console.log(`The amount in your account is ${this.balance}`) ;
    }
}


let bankDetails = new Bank("Hanuman",28,"Male") ;

// bankDetails.userDetails() ;
bankDetails.deposit(5000)
bankDetails.withdraw(6000)
// bankDetails.view_balance() ;




export{}
