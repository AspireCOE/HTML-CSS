"use strict";
let id = 3;
let companyName = "Code World";
let isOpen = true;
// Array
let employeesId = [1, 2, 3, 4, 5];
let employeeName = ["Ram", "Karthi", "Swetha", "Vishal", "Raju"];
// Tuple ==> More like arrays but has more than one data type in its
let employee = [2, "Karthi", true];
// tuple array
let employees = [
    [1, "Ram", true],
    [2, "Karthi", true],
    [3, "Swetha", true],
];
// Union
let employeeId;
employeeId = 20;
employeeId = "Code-e-20";
// enum
var direction1;
(function (direction1) {
    direction1[direction1["up"] = 0] = "up";
    direction1[direction1["down"] = 1] = "down";
    direction1[direction1["left"] = 2] = "left";
    direction1[direction1["right"] = 3] = "right";
})(direction1 || (direction1 = {}));
let user = {
    id: 1,
    name: "Ram",
};
// type assertion
let someValue = "Hello TypeScript";
// Angle-Bracket syntax
let stringLength = someValue.length;
console.log(stringLength); // Output: 16
// As-syntax
let stringLength2 = someValue.length;
console.log(stringLength2); // Output: 16
// Function
function doMath(a, b) {
    return a + b;
}
console.log(45, 67);
function Greet(x) {
    if (typeof x === "number")
        console.log("X is a number");
    if (typeof x === "string")
        console.log("X is a number");
}
Greet(5);
let user1 = {
    id: 1,
    name: "Ram",
};
class person {
    constructor(id, name) {
        this.id = 0;
        this.name = "";
        (this.id = id), (this.name = name);
    }
}
let person1 = new person(1, "Arun");
let person2 = new person(2, "Aswin");
console.log(person1, person2);
