import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const { DB_HOST, BACK_PORT } = process.env;

const db = mysql.createPool({
  host: DB_HOST,
  // user: DB_USER,
  // password: DB_PASSWORD,
  // database: DB_SCHEMA,
});

const backPort = parseInt(BACK_PORT, 10);
module.exports = {
  backPort,
  db,
};
