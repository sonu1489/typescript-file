export {}
let message = "welcome back agin";
console.log(message);

// variable Declaration
let x = 10;
const y = 20;

let sum ;
const title = "valevolution";

// basic variable types
let isBeginner: Boolean = true;
let total: number = 0;
let name: string = "vishwas";

let sentence: string = `My nane is ${name}
i am beginner in typescript`;

console.log(sentence);

//  sub type
let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

// arry type
let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

// tuple type
let person1: [string, number] = ["chris",22];

// enum type
enum color {Red = 5, Green, Blue};
let c: color = color.Green;
console.log(c);

// any type
let randomValue: any = 10;
randomValue = true;
randomValue = "vishwas";

// // unknown type
// let myVariable : any = 10;

// function hasName(obj:any): obj is {name: string} {
//     return !!obj &&
//     typeof obj ==="object" &&
//     "name" in obj
// }

// if (hasName(myVariable)){
//     console.log(myVariable.name);
// }

// myVariable.toUpperCase();

let a;
a = 10;
a = true;

let b = 20;

// variable : type = 
// union type
let multiType: number| boolean;
multiType = 20;
multiType = true;

let anyType: any;
anyType = 20;

// ***function

function add(num1: number, num2:number = 10){ /*? = optional  */
    if (num2)
    return num1 + num2;
    else 
    return num1;
}
add(5,10);
add(5);

// **interface

interface Person{
    firstName: string;
    lastName: string;
}

function fullName(person: Person) {
     console.log(`${person.firstName} ${person.lastName}`); 
}

let p = {
    firstName: "bruce",
    lastName: "wayne"
}
fullName(p);

// ***class

class Employee {
    employeeName: string;

    constructor(name: string){
        this.employeeName = name;
    }
    // method
    greet(){
        console.log(`good Morning ${this.employeeName}`);
        
    }
}

let emp1 = new Employee("sonu");
console.log(emp1.employeeName);
emp1.greet();

// inheritence 
class Manager extends Employee {
    constructor(managerName: string){
        super(managerName);
    }
    delegateWork(){
        console.log("manager delegating task");
    }
}

let m1 = new Manager("bruce");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

// public can work througout the function
// private  accessibility with in class
// protected with in class and class drived from it


