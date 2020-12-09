const log = require('./logger');

const sayHi = (name) => {
    return 'Hello ' + name;
}

log(`I'll be logging a message`)
console.log(log);