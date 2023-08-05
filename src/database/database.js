import { createPool } from "mysql2/promise";

// Create database connection

export const connection = createPool({
  host: process.env.HOST || "localhost",
  port: process.env.DB_PORT || "3306",
  database: process.env.DATABASE || "rest_api_express",
  user: process.env.USER || "root",
  password: process.env.PASSWORD || "",
});
