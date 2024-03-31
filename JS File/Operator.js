// assignment operator
let x=5;
x= x+1; // x++
x = x+5; // x += 5
x = x*5; // x *= 5
x = x%5; // x %= 5

// Arithmetic operator

let num1=10;
let num2=5;
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);
console.log(num1**num2);
console.log(num1++);
console.log(num1--);
console.log(num2++);
console.log(num2--);

// comparision operator
let number=4;

//relational operator
console.log(number<5);
console.log(number<=5);
console.log(number>1);
console.log(number>=1);

//Equality operator
console.log(number === 4);
console.log(number !== 3);

console.log('1' === 1); // false  string = number --> different data type
console.log('1' == 1); // true


//ternary operator

let age=20;
let type= age>18 ? "Adult":"Child";
console.log(type);

// logiacal operator  And(&&), Or(||), Not(!)
// logival operator with non boolean values
/* falsy ==> undefined, null, 0, " ", '', false,NaN
   truthy ==> values other than falsy
*/

let userColor="";
let defaultColor="Blue";
let currentColor = userColor || defaultColor;
console.log(currentColor);