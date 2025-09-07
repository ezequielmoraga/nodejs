
const express=require('express');

const app= express();

//crea ruta virtual
app.use('/publico',express.static('./publico_estatico'));

app.listen(3000, () => {
    console.log(`Example app listening on port ${3000}`)
  })