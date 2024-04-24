const os = require("os");

// method for userinfo
const user=os.userInfo();
console.log(user);

// method of system uptime
console.log(`The system UpTime is ${os.uptime} seconds`);

const currentOS={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem()
}
console.log(currentOS);