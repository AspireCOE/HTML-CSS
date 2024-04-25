const http = require('http');
const server = http.createServer();
server.on('request',(req,res)=>{
    console.log("Welcome");
})
server.listen(3000);