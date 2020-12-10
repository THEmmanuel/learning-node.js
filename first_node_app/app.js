const os = require('os');

let freeMem = os.freemem();
let uptime = os.uptime();
let userinfo = os.userInfo();
let totalMem = os.totalmem();

console.log(`Total Memory: ${totalMem}`)
console.log(`Free Memory: ${freeMem}`)
console.log(`user info: ${userinfo}`)
console.log(`uptime: ${uptime}`)