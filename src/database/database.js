import { createPool } from "mysql2/promise";
import { config } from "dotenv";

config();

// Create database connection

export const connection = createPool({
  host: process.env.HOST,
  port: process.env.DB_PORT,
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
});
