const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {
  constructor() {
    super();

    //uso nextTick para emitir el evento una vez que el handler se haya instalado
    process.nextTick(() => {
      this.emit('event');
    });
  }
}

const myEmitter = new MyEmitter();

myEmitter.on('event', () => {
  console.log('an event occurred!');
});
