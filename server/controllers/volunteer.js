
import pool from "../db.js";

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
