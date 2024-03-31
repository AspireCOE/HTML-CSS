//Array ---> Array is also a type of object in JS
let favColors =["yellow","Blue","Green"];
console.log(favColors);
favColors[3]="White";
console.log(favColors);
console.log(favColors.length);

// Adding element to Array

const Array=["Cat","Dog"];
Array[2]="Elephant";

// push method is used to element in back of the array
Array.push("Frog","Giraffe");

// unshift method is used to add element in the front of the array
Array.unshift("Ant");

// splice method is used to add element in the speciified location
Array.splice(1,0,"Buffalo");

console.log(Array);


// finding an element in the array in primitive array
let items=["Apple","Orange","Banana","Apple"];
console.log(items.indexOf("Apple"));
console.log(items.lastIndexOf("Apple"));
console.log(items.indexOf("Grapes") !== -1);
console.log(items.includes("Banana"));

// finding an element in reference array

const cart=[
    {id:1, item:"Shampoo",quantity:4},
    {id:2, item:"Soap",quantity:2},
    {id:3, item:"Oil",quantity:1}

]
let ans=cart.find(function(carts){
    return carts.item === "Soap"
});
console.log(ans);

/*let anss=cart.findIndex(function(carts){
    return carts.item === "Soap"
}); */

// Arrow function
let anss=cart.findIndex((order) => order.item === "Soap")
console.log(anss);


// Removing Element in array
let number=[1,2,3,4,5,6];
// pop --> remove element from the end
number.pop();

// shift --> remove element in the start
number.shift();

// splice --> remove element in the index given
number.splice(2,2);

console.log(number);

// Emptying an array
// solution 1
number=[];
// solution 2
number.length=0;
//solution 3
while(number.length){
    number.pop();
}
// solution 4
number.splice(0,number.length);

console.log(number);


// combining an array
let shopping_cart=["Watch","Chain","Dress"];
let wish_list=["Perfume","Shoes"];
//combining
let item=shopping_cart.concat(wish_list);
console.log(item);

// Extract use slice
console.log(item.slice(1,4));

// After ES6 spread operator is introduced
let result=[...shopping_cart,44,{item:"hello"},wish_list];
console.log(result);


// iteration array
let numberList=[1,2,3,4,5,6];
// for-of
for(let value of numberList){
    console.log(value);
}
// for-in
for(let key in numberList){
    console.log(numberList[key]);
}

// for each
numberList.forEach((list,listIndex) => {
    console.log(listIndex,list);
});


// join and split method

let title="This is my post";
let titleChanged=title.split(" ");
let finalTitle=titleChanged.join("_");
console.log(finalTitle);

// Sorting array in reference type
let student=[
    {id:8,name:"Senthil"},
    {id:1,name:"Anbu"},
    {id:4,name:"Leo"}
    
];

student.sort(function(a,b){
    if(a.name<b.name) return -1;
    if(a.name>b.name) return 1;
    return 0;
});
console.log(student);

// testing an Array
let num=[1,2,3,4,5,6];
let isEven=num.some(function(value){
    return value%2 ==0;
});
console.log("isEven: "+isEven);

// some --> more likely an OR operator
// every --> likely to an AND operator

// Filter() method

let evenNumber= num.filter(function(value){
    return value%2 === 0;
});
let oddNumber= num.filter(function(value){
    return value%2 === 1;
});
console.log(evenNumber);
console.log(oddNumber);


// map() method 
let square=num.map(function(value){
    return value**2;
});
console.log(square);