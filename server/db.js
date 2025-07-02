import pg from "pg";
import dotenv from "dotenv";

const { Pool } = pg;
dotenv.config(); 

console.log("DB Config:", {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

pool.connect((err, client, release) => {
  if (err) {
    console.error("DB connection error:", err.message);
    return;
  }
  console.log("DB connected successfully");
  release();
});
export default pool;
