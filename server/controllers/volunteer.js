
import pool from "../db.js";
import ExcelJS from "exceljs";

export const createVolunteer = async (req, res) => {
  const {
    name,
    contact,
    university,
    degree,
    semester,
    city,
    email,
    experience,
  } = req.body;

  try {
    const query = `
      INSERT INTO volunteers
      (name, contact, university, degree, semester, city, email, experience)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *;
    `;

    const values = [
      name,
      contact,
      university,
      degree,
      semester,
      city,
      email,
      experience || null,
    ];

    const result = await pool.query(query, values);
    res.status(201).json({
      message: "Volunteer added successfully",
      volunteer: result.rows[0],
    });
  } catch (err) {
    console.error(err);
    if (err.code === "23505") {
      return res.status(409).json({ message: "Email already exists" });
    }
    res.status(500).json({ message: "Database error", error: err });
  }
};
export const exportVolunteers = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM volunteers ORDER BY submitted_at DESC"
    );
    const volunteers = result.rows;

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Volunteers");

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

    volunteers.forEach((volunteer) => {
      worksheet.addRow(volunteer);
    });

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
}