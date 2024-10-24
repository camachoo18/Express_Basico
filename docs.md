## Query Parameters

En un endpoint de query parameters puedo mandar los datos desde la url, mi 
back-end se veria asi

```js
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
```
Y mi front end asi:
```html
<a href="queryparameters.html">Saludar</a>
<script>
    fetch("/query_parameters?clave=valor")

</script>
```
Para acceder a el y diferenciarlo de mi endpoint, solo tendriamos que añadir al final un /query_parameters.html

## Post Request
ESta forma de mandar datos suele hacerse con un formulario html basico

ES muy importante añadir la linea del principio o no funcionara, y no leera req.body.mensaje

```js
app.use(express.urlencoded({ extended: true }));

app.post('/enviar', (req, res) => {
    const mensaje = req.body.mensaje;
    res.send(`Mensaje recibido: ${mensaje}`);
});
```
El formulario para este endpoint es:

```html
<form action="/enviar" method="POST">
    <input type="text" name="mensaje">
    <button type="submit">Enviar</button>
  </form>
```
