const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {
  constructor() {
    super();
    this.emit('event');
  }
}

const myEmitter = new MyEmitter();//aca instancio y en el contructor lo emito, pero no se llego a instalar
//el handler


myEmitter.on('event', () => {
  console.log('an event occurred!');
});//no llega a ser atajado, pq se dispara antes de instalar atajador.
