const express = require('express');
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, 'public')));


app.get('/query_parameters', (req, res) => {
    const clave = req.query.clave;
    console.log(clave);
    res.send(`Hola, ${clave}!`);
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});