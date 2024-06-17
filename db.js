const mysql = require('mysql2/promise');
require("dotenv").config();
// Crea la conexión a la base de datos
const pool_select = mysql.createPool({
  host: process.env.DBHOST, 
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD, 
  database: process.env.DB
});

// OTRA CONEXION PARA UN USUARIO

const pool_iud = mysql.createPool({
    host: process.env.DBHOSTIUD, 
    user: process.env.DBUSERIUD,
    password: process.env.DBPASSWORDIUD, 
    database: process.env.DBUID
  });


// Conéctate a la base de datos
// pool.connect((err) => {
//   if (err) {
//     console.error('Error al conectar a la base de datos:', err.stack);
//     return;
//   }
//   console.log('Conectado a la base de datos MySQL como ID', connection.threadId);
// });

// Exporta la conexión para usarla en otros módulos
module.exports = {
    pool_select,
    pool_iud
};