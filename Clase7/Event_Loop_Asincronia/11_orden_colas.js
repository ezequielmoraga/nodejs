//Al momento de ver este codigo no fueron explicadas que son las promesas


const baz = () => console.log('baz');
const foo = () => console.log('foo');
const zoo = () => console.log('zoo');

const start = () => {
  console.log('start');
  setImmediate(baz);
  new Promise((resolve, reject) => {
    resolve('bar');
  }).then(resolve => {
    console.log(resolve);
    process.nextTick(zoo);
  });
  process.nextTick(foo);
};

start();

// start foo bar zoo baz

// Compiten nexTick promesa y setInmediate

//Se ejecuta   console.log('start');
//Se planifica setImmediate(baz); //macro task cola
//Se planifica/lanza la promesa //micro task
//Se ejecuta process.nextTick(foo);
//Se ejecuta resolucion de promesa satiffactoriamente con valor 'bar'
//Al resolverse satisfactoriamente se ejecuta console.log(resolve); imprimiendo bar
//Se ejecuta inmediantamente luego process.nextTick(zoo);
//Se ejecuta el planificado anteriormente setImmediate(baz)

