import mysql from "mysql2";
import dotenv from"dotenv";
import { createConnection } from "mysql2/promise";

dotenv.config();

const pool = mysql.createPool({
    connectionLimit:10,
    host: process.env.DB_HOST ,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error("Database connection failed: ", err);
    return;
  }
  console.log("Database connected successfully!");
  connection.release();
});

export default pool;
