const express = require('express');
const http = require('http');
const path = require('path');
// const db = require('./db');


// router def
const pruebaRoute = require("./routes/prueba");
// const queryRoute = require("./routes/query");

const app = express();
const port = 3000;

// Middleware para analizar JSON
app.use(express.json());

app.use("/prueba", pruebaRoute);
// app.use("/query", queryRoute);


// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));


// Ruta principal para servir el archivo index.html
app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, '/public/index.html'));
});

// Ruta ejemplo con parámetro
// app.get('/saludo/:nombre', (req, res) => {
//   res.send(`¡Hola, ${req.params.nombre}!`);
// });

// Crea el servidor HTTP
const server = http.createServer(app);

// Inicia el servidor
server.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

