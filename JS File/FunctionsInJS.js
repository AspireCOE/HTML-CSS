 // object
const person1= {
    name:'Raj',
    age: 20
};
const person2= {
    name:'Siva',
    age: 20
};

// function
function personName(name){
    console.log(name);
}

personName(person1.name);
personName(person2.name);

function personDetail(person){
    console.log(person.name,person.age);
}
personDetail(person1);
personDetail(person2);
personDetail({name:"Leo", age:"23"});


//To handle Many Number of parameter without knowing the length we can use arg

function employeeName(...arg){
    console.log(arg);
}
employeeName(person1.name, person2.name, 'Leo', 'Janu', 'Devi');

//return function 

function getFullName(firstName,lastName){
    const name=firstName+' '+lastName;
    return name;
}
var fullName=getFullName("Vijay","Sethupathi");
console.log(fullName);


// annonymous functiom ---> function without name (we store the entire function in one variable)
const getName= function(name1,name2){
    return(name1+" "+name2);
}
let fullName1 = getName("Harshith","Singh");
console.log(fullName1);

// arrow function (when the function has only one function then we don't need to specify the return keyword)

const getName1= (name1,name2) =>  (name1+" "+name2);

let fullName2 = getName1("1","2");
console.log(fullName2);