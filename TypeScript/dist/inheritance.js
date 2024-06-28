"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    Greet() {
        return `Hi, I am ${this.name} and I am ${this.age} year old`;
    }
}
class Member extends Person {
    constructor(name, age, memberId, department) {
        super(name, age);
        this.memberId = memberId;
        this.department = department;
    }
    getDepartment() {
        return `I am ${this.name} from ${this.department} department`;
    }
    getId() {
        return `Employee Id of this person (${this.name}) is ${this.memberId}`;
    }
}
const member1 = new Member("Arun", 25, "Arun02", "SD");
console.log(member1.Greet());
console.log(member1.getId());
console.log(member1.getDepartment());
