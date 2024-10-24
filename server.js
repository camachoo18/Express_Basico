const express = require('express');
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, 'public')));
// Middleware para parsear el cuerpo (body) de las solicitudes(sin esto no mostrara el mensaje)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/query_parameters', (req, res) => {
    const clave = req.query.clave;
    console.log(clave);
    res.send(`Hola, ${clave}!`);
});

app.post('/enviar', (req, res) => {
    const mensaje = req.body.clave;
    const nombre = req.body.nombre;
    const number = req.body.numero;
    res.send(`Mensaje recibido: ${mensaje} ${nombre} ${number}`);
});

app.post('/json', (req, res) => {
    const nombre = req.body.nombre;
    res.send(`Hola, ${nombre}!`);
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});