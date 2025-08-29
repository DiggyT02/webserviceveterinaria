require('dotenv').config();
const mysql = require('mysql2/promise');

//Se encarga de la conexion al servidor > BD 
//1. Leer el archivo .env
//2. Crear un 'pool' de conexion(reutilizable)
//3. Asignar todos los parametros de conexion

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})

//IMPORTANTE - Exportar el objeto
module.exports = pool;