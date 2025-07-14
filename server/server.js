import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";
import { dirname } from "path";

import volunteerRoutes from "./routes/volunteer.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
dotenv.config();

app.use(express.json());
app.use(
  cors({
    origin: ["https://wokpk.netlify.app"],
    methods: ["GET", "POST"],
  })
);
app.use(bodyParser.json());

app.use("/api/volunteers", volunteerRoutes);

app.use(express.static(path.join(__dirname, "../dist/wok")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/wok/index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
