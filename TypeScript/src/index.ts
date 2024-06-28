let id: number = 3;

let companyName: string = "Code World";

let isOpen: boolean = true;

// Array
let employeesId: number[] = [1, 2, 3, 4, 5];
let employeeName: string[] = ["Ram", "Karthi", "Swetha", "Vishal", "Raju"];

// Tuple ==> More like arrays but has more than one data type in its

let employee: [number, string, boolean] = [2, "Karthi", true];

// tuple array
let employees: [number, string, boolean][] = [
  [1, "Ram", true],
  [2, "Karthi", true],
  [3, "Swetha", true],
];

// Union

let employeeId: string | number;
employeeId = 20;
employeeId = "Code-e-20";

// enum
enum direction1 {
  up,
  down,
  left,
  right,
}

// object

type userType = {
  id: number;
  name: string;
};

let user: userType = {
  id: 1,
  name: "Ram",
};

// type assertion

let someValue: any = "Hello TypeScript";

// Angle-Bracket syntax
let stringLength: number = (<string>someValue).length;
console.log(stringLength); // Output: 16

// As-syntax
let stringLength2: number = (someValue as string).length;
console.log(stringLength2); // Output: 16

// Function

function doMath(a: number, b: number): number {
  return a + b;
}

console.log(45, 67);

function Greet(x: number | string): void {
  if (typeof x === "number") console.log("X is a number");
  if (typeof x === "string") console.log("X is a number");
}

Greet(5);

// Interface

interface userType1 {
  readonly id: number;
  name: string;
  email?: string;
}

let user1: userType1 = {
  id: 1,
  name: "Ram",
};

class person {
  id: number = 0;
  name: string = "";

  constructor(id: number, name: string) {
    (this.id = id), (this.name = name);
  }
}

let person1 = new person(1, "Arun");
let person2 = new person(2, "Aswin");

console.log(person1, person2);
