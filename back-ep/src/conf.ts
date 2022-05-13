import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

export const { DB_HOST, DB_USER, DB_SCHEMA, DB_PASSWORD, DB_PORT } =
  process.env;

const connectionString = `postgres://${DB_USER}:${DB_PASSWORD}@postgres:5432/${DB_SCHEMA}?sslmode=disable`;
export const pool = new Pool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_SCHEMA,
});

console.log(pool);
