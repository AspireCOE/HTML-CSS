const eventEmitter = require("events");

const customEmitter = new eventEmitter();

customEmitter.on('response',(name,id)=>{
    console.log(`Data is saved for ${name} ${id}`);
})

customEmitter.on('response',()=>{
    console.log("Other logics");
})

customEmitter.emit('response',"kamal",32);