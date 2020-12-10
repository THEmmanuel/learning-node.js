const EventEmitter = require('events');
const emitter = new EventEmitter;

emitter.on('messageLogged', () => {
    console.log('Message Logged Listener')
})

emitter.emit('messageLogged')