let num1=45;
let num2=55;

// function declaration
function addNo(){
    let result=num1+num2;
    console.log(result);
}
addNo();

// function expression with name
let addNum= function addNum(){
    let result=num1+num2;
    console.log(result);
}
addNum();

// Anonymous function
let addNum1= function (){
    let result=num1+num2;
    console.log(result);
}
addNum1();

// Arrow function
let addNum2= () => {
    let results=num1+num2;
    console.log(results);
};
addNum2();

// function constructor
let addition=new Function(console.log(num1+num2));

// IIFE (Immediately Invoked Function Expression)
(function display(){
    console.log("Welcome");
})();

// function argument  
function sumExpenses(){
    let total=0;
    //arguments are stored in object
    for(let value of arguments){
        total += value;
    }
    return total;
}
let total=sumExpenses(99,55,67,98,103);
console.log(total);


// Function default paramenters
function totalAmount(cost,tax=18){
    totalTax=cost*(tax/100)
    console.log(`The total amount for the cost: ₹${cost} with tax of : ₹${totalTax} is ₹${cost+totalTax}`);
}
totalAmount(150);