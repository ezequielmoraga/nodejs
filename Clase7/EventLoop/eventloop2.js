/*
1 nextTickc cola:  nextTick
2 microtask cola: promesas
3 macrotask cola: setTimeout setInmediate
*/

//1 codigo main                         start
//2 nextTick                            foo
//3 promeise                            bar
//4 nextick en el then de la promesa    zoo
//5 setInmedaite                        baz

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