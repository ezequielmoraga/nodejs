function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function ejemplo() {
    console.log('Comenzando...');
    await delay(2000); // Espera 2 segundos
    console.log('Han pasado 2 segundos.');
    await delay(1000); // Espera 1 segundo
    console.log('Han pasado 3 segundos en total.');
  }
  
  ejemplo();
  