import express from "express";
import { createVolunteer } from "../controllers/volunteer.js";
const router = express.Router();
import pool from "../db.js";
import ExcelJS from "exceljs";
router.post("/create", createVolunteer);


router.get("/export", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM volunteers ORDER BY submitted_at DESC"
    );
    const volunteers = result.rows;

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Volunteers");

    // Define headers
    worksheet.columns = [
      { header: "Name", key: "name", width: 20 },
      { header: "Contact", key: "contact", width: 20 },
      { header: "University", key: "university", width: 30 },
      { header: "Degree", key: "degree", width: 20 },
      { header: "Semester", key: "semester", width: 10 },
      { header: "City", key: "city", width: 15 },
      { header: "Email", key: "email", width: 25 },
      { header: "Experience", key: "experience", width: 30 },
      { header: "Submitted At", key: "submitted_at", width: 25 },
    ];

    // Add data rows
    volunteers.forEach((volunteer) => {
      worksheet.addRow(volunteer);
    });

    // Send Excel file to client
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=volunteers.xlsx"
    );

    await workbook.xlsx.write(res);
    res.end();
  } catch (err) {
    console.error("Error exporting Excel:", err);
    res.status(500).json({ message: "Failed to export volunteers" });
  }
});


export default router;
