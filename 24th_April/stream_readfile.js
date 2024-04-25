const {createReadStream} = require('fs');

const stream=createReadStream("./content/result_sync.txt",{highWaterMark:9000, encoding:'utf8'});

stream.on('data',(result)=>{
    console.log(result);
})
stream.on('error',(error)=>console.log(error))