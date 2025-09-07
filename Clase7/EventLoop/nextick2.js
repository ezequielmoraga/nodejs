setTimeout(() => {
  console.log('timeout');
}, 0);
setImmediate(() => {
  console.log('immediate');
});


let bar;
function someAsyncApiCall(callback) {
  process.nextTick(callback);//como la callback esta dentro de nextTick se ejecuta todo el codigo primero
}
someAsyncApiCall(() => {
  console.log('bar', bar); // 1
});
bar = 1;


//se inicializa la variable antes de hacer la callback
//se ejecuta primero el callback de process.nexetTick() antes de setInmmediate()  y setTimeout()