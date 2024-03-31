// oop concept
let person={
    name:"Leo",
    age:20,
    interest:["Learning"],
    address:{
        district:"Coimbatore",
        state:"Tamil Nadu"
    },
    greeting : function(){
        let msg='I am ' +this.name + ' & my interest is ' +this.interest;
        console.log(msg);
    }
};

person.greeting();

//Factory function
function createPerson(name){
    return{
        name,
        greeting() {
            let msg="I am "+name+"!!";
            console.log(msg);
        }
    };
}
let leo=createPerson("Leo");
leo.greeting();


// Constructor FUnction
function Person(name){
    this.name=name,
    this.greeting=function(){
        console.log("This is "+ name);
    }
}
let person1=new Person("Leo");
person1.greeting();