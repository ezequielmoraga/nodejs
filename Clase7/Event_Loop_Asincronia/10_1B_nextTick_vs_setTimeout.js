
process.nextTick(() => {
  console.log('Running at next tick => number 2');
});

console.log('Hello => number 1');

setImmediate(() => {
  console.log('Running before the timeout => number 3');
});//se ejecuta en fase check

setTimeout(() => {
  console.log('The timeout running last => number 4');
}, 0);//se ejecuta en fase timers




//Interpretación:
// inicio del programa
// se ejecuta el console.log()
// se planifica la callback de setInmediate() para la proxima iteracion, esta se ejecutará en la fase check
// se planifica la callback de setTimeout() para la proxima iteracion, esta se ejecutara en la fase timers
// se ejecuta la callback de nextTick() inmediatamente finalizó la planificación de setTimeout()
// Se llega a  la etapa de check , entonces se ejecuta lo planificado por setImmediate()
// Pega la vuelta el event loop
// Se llega a la etapa de timers ,entonces se ejecuta lo planificado por setTimeout()
// 4 y 3 pueden cambiar de orden
// fin del programa
