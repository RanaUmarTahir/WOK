import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import volunteerRoutes from "./routes/volunteer.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/volunteers", volunteerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
