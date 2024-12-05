const mysql = require('mysql2');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'David03bueno236',
    database: 'proyecto_Final_Electiva1'
});

conexion.connect((error)=> {
    if (error) {
        console.log('Sucedio un error:'+error);
        return
    }
    console.log('Conectado a la BD MYSQL!');
});

module.exports = conexion;