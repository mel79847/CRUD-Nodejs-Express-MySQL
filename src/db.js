import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();  // Cargar variables de entorno desde el archivo .env
// Crear una conexión a la base de datos MySQL  con las credenciales de tu entorno
// Puedes usar variables de entorno para mayor seguridad            

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
