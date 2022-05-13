import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

export const { DB_HOST, DB_USER, DB_SCHEMA, DB_PASSWORD, DB_PORT, DB_NAME } =
  process.env;

// We shoul keep that string which allows us to connect to the server like the pool below. What is better ?
// const connectionString = `postgres://${DB_USER}:${DB_PASSWORD}@postgres:5432/${DB_NAME}`;
//We need to find what is the type of Pool

/**
 * Allows to connect the .env file, and so the db.
 */
export const pool = new Pool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});
