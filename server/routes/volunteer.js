import express from "express";
import { createVolunteer, exportVolunteers } from "../controllers/volunteer.js";
const router = express.Router();

router.post("/create", createVolunteer);
router.get("/export", exportVolunteers); //to download goto http://localhost:5000/api/volunteers/export or https://wok-production.up.railway.app/api/volunteers/export

export default router;
