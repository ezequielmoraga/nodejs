
const EventEmitter = require('node:events');

const eventEmitter = new EventEmitter();

function listen_start(start,end)
{
  console.log(`started from ${start} to ${end}`);
}

eventEmitter.on('start', listen_start );



eventEmitter.emit('start', 111,123456);//aca emito el evento y le paso el argumento

eventEmitter.emit('start', 222,123456);//aca emito el evento y le paso el argumento



eventEmitter.removeListener('start',listen_start);

eventEmitter.emit('start', 333,123456);//aca emito el evento y le paso el argumento pero ya esta quitado
//el listener

