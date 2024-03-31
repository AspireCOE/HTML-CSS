// math object
let piValue=Math.PI
console.log(Math.PI);
console.log(Math.abs(-3));
console.log(Math.ceil(1.1));
console.log(Math.round(1.1));
console.log(Math.random() * (100 - 1) + 1);
// largest number in a array
let array=[75,56,87,90];
console.log("Largets Value "+Math.max(...array));

// string builtin object
let firstName="Anbu";
let secondName="Selavam";
console.log(firstName.charAt(2));
console.log(firstName.concat(" ",secondName));
console.log(firstName.includes("An"));
console.log(firstName.startsWith("A"));

const msg=`Hello this \"Leo\".`;
console.log(msg);

const msg1=`The value for pi is "${piValue}"`;
console.log(msg1);