// if else statement for greeting message according to the time
let hour= new Date().getHours();
console.log(hour);

if(hour >=0 && hour<=12){
    console.log("Good Morning");
}
else if(hour>12 && hour<=17){
    console.log("Good Afternoon");
}
else{
    console.log("Good Evening");
}


// switch statement for grading application
let mark=80;
switch(true){
    case mark>90:
        console.log("Super Grade");
        break;
    case mark>50:
        console.log("Pass");
        break;
    case mark<50:
        console.log("Fail");
        break;
    
}


// for in loop

const person={
    name: "Leo",
    age: 20,
    gender: "Male"
}
for(let key in person){
    console.log(key+" : "+person[key]);
}

//for of loop
for(let values of Object.keys(person)){
    console.log(values);
}
for(let entry of Object.entries(person)){
    console.log(entry);
}



let color=["Blue","Yellow","white"];
for(let value of color){
    console.log(value);
}

// Cloning an object
// for-in loop
let clonePerson={};
for(let key in person){
    clonePerson[key]=person[key];
}
console.log("Output from cloning using for-in loop");
console.log(clonePerson);
// assign operator
console.log("Output from cloning using assign operator");
let another=Object.assign({},person);
console.log(another);
// spread operator
console.log("Output from cloning using spread operator introduced after es6");
let ans={ ... person};
console.log(ans);
