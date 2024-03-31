// date
let time=Date();
console.log(time);

let [month,date,year]= new Date().toLocateDateString("en-US").split("/");
console.log([month,date,year]);