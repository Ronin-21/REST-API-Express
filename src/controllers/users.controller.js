import { connection } from "../database/database.js";

// Set controllers

// Get all users
export const getUsers = async (req, res) => {
  try {
    const [result] = await connection.query("SELECT * FROM user");
    res.json(result);
  } catch (error) {
    res.status(500).res.json({ message: error.message });
  }
};

// Get one user
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await connection.query(
      "SELECT * FROM user WHERE id = ?",
      id
    );

    if (result.length === 0) {
      return res.status(404).json({ message: "Not Found" });
    }

    res.json(result);
  } catch (error) {
    res.status(500).res.json({ message: error.message });
  }
};

// Create a user
export const addUser = async (req, res) => {
  try {
    const { name, profession } = req.body;

    if (name === undefined || profession === undefined) {
      res.status(401).json({ message: "Bad Request. Please fill all field." });
    }

    const newUser = { name, profession };
    await connection.query("INSERT INTO user SET ?", newUser);
    res.json({ message: "User added" });
  } catch (error) {
    res.status(500).res.json({ message: error.message });
  }
};

// Update a user
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, profession } = req.body;

    if (id === undefined || name === undefined || profession === undefined) {
      res.status(401).json({ message: "Bad Request. Please fill all field." });
    }

    const updatedUser = { name, profession };
    await connection.query("UPDATE user SET ? WHERE id = ?", [updatedUser, id]);
    res.json({ message: "User changed" });
  } catch (error) {
    res.status(500).res.json({ message: error.message });
  }
};

// Delete a user
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await connection.query("DELETE FROM user WHERE id = ?", id);
    res.json({ message: "User deleted" });
  } catch (error) {
    res.status(500).res.json({ message: error.message });
  }
};
