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
## Fetch API

CUando queremos hacer algo con la respuesta del backend necesitamos usar `fetch` y `then`
En el front tenemos: 
```html
<p id="respuesta"></p>

<script>
    const respuesta = document.getElementById('respuesta');

    fetch('/json', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nombre: 'Camacho' })
})
.then(response => response.text())  
        .then(data => {
            respuesta.textContent = data;  
        })

</script>
```
En el backend 
```js
app.use(express.json());

app.post('/json', (req, res) => {
    const nombre = req.body.nombre;
    res.send(`Hola, ${nombre}!`);
});
```
Es importante añadir la primera linea`app.use(express.json());` o no podremos recibir el dato en `req.query.nombre`

## Params
Puedes pasar datos como parte de la URL. Express los recibe a traves de `req.params`.

En el front tenemos.
<a href="/usuario/123">Ver Usuario</a>

<p id="respuesta"></p>

<script>
    const nombre = "Camacho"
    const respuesta = document.getElementById('respuesta');

    fetch(`/usuario/${nombre}`)
.then(response => response.text())  
.then(data => {respuesta.textContent = data;})

</script>
Pero hemos añadido el fetch para que aparezca en la pagina sin problema

y en el backend tenemos:
```js
app.get('/usuario/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Usuario ID: ${id}`);
});
```