const os = require('os');

const user = os.userInfo();

console.log(user);

console.log(`The systme uptime is: ${os.uptime()} seconds`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totMem: os.totalmem(),

}

console.log(currentOs);