const {readFile} = require('fs');
console.log("This is the 1st step");
readFile("./content/first.txt","utf-8",(err,result)=>{
    if(err){
        console.log(err);
    }
    console.log(result);

})
console.log("This the last statement");