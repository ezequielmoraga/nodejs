
const EventEmitter = require('node:events');

const eventEmitter = new EventEmitter();


eventEmitter.on('start', () => {
    console.log('started');
  });//cuando se emita start se ejecuta este handler callback lambda
  

  eventEmitter.emit('start');//aca emito el evento
