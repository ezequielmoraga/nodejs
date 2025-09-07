
const EventEmitter = require('node:events');

const eventEmitter = new EventEmitter();


eventEmitter.on('start', (start, end) => {
  console.log(`started from ${start} to ${end}`);
});




eventEmitter.emit('start', 222,123456);//aca emito el evento y le paso el argumento




