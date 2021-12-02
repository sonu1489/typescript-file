"use strict";
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
var message = "welcome back agin";
console.log(message);
// variable Declaration
var x = 10;
var y = 20;
var sum;
var title = "valevolution";
// basic variable types
var isBeginner = true;
var total = 0;
var name = "vishwas";
var sentence = "My nane is ".concat(name, "\ni am beginner in typescript");
console.log(sentence);
//  sub type
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
// arry type
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// tuple type
var person1 = ["chris", 22];
// enum type
var color;
(function (color) {
    color[color["Red"] = 5] = "Red";
    color[color["Green"] = 6] = "Green";
    color[color["Blue"] = 7] = "Blue";
})(color || (color = {}));
;
var c = color.Green;
console.log(c);
// any type
var randomValue = 10;
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
var a;
a = 10;
a = true;
var b = 20;
// variable : type = 
// union type
var multiType;
multiType = 20;
multiType = true;
var anyType;
anyType = 20;
// ***function
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add(5, 10);
add(5);
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: "bruce",
    lastName: "wayne"
};
fullName(p);
// ***class
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    // method
    Employee.prototype.greet = function () {
        console.log("good Morning ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee("sonu");
console.log(emp1.employeeName);
emp1.greet();
// inheritence 
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("manager delegating task");
    };
    return Manager;
}(Employee));
var m1 = new Manager("bruce");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
// public can work througout the function
// private  accessibility with in class
// protected with in class and class drived from it
