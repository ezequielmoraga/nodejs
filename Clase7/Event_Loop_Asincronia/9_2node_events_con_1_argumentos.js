
const EventEmitter = require('node:events');

const eventEmitter = new EventEmitter();


eventEmitter.on('start', number => {
  console.log(`started ${number}`);
});

eventEmitter.emit('start', 123456);//aca emito el evento y le paso el argumento


  

