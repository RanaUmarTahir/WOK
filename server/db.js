import pg from "pg";
import dotenv from "dotenv";

const { Pool } = pg;
dotenv.config(); 

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, 
  },
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
