// primitive type
let x=10;
let y=x;
x=20;
console.log(y);

// Reference type
let number1={
    value:10
};
let number2=number1;
number1.value=20;
console.log(number2.value);