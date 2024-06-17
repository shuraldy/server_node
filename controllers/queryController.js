const db = require('./../db');
// const mysql = require('mysql2/promise');
// const pool = mysql.createPool({
//     host: 'localhost', // Cambia esto por la dirección de tu servidor MySQL
//     user: 'root', // Cambia esto por tu nombre de usuario de MySQL
//     password: '', // Cambia esto por tu contraseña de MySQL
//     database: 'rpnis' // Cambia esto por el nombre de tu base de datos
// });


const queryController = {
  query1: async () => {

    try {
        const connection = await db.pool_select.getConnection();
        const query = `SELECT * FROM persona LIMIT 10`;
        const results = await connection.query(query);
        
        return results[0];

        // db.query('SELECT * FROM persona LIMIT 10', (err, results) => {
        //     if (err) {
        //         console.error('Error en la consulta:', err);
        //         // return res.status(500).send('Error en la consulta a la base de datos');
        //     };

        //     console.log(results);
        //     return results;

        // });

        
    } catch (error) {

        console.log(error);
        
    }


    // db.query('SELECT * FROM persona', (err, results) => {
    //   if (err) {
    //     console.error('Error en la consulta:', err);
    //     return res.status(500).send('Error en la consulta a la base de datos');
    //   }
    //   console.log(results);
    // //   res.json(results);
    // });
  }
}

module.exports = queryController;