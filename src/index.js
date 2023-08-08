import express from "express";
import usersRoutes from "./routes/users.routes.js";
import { config } from "dotenv";

config();

// Initilization
const app = express();
app.disable("x-powered-by");

// Settings
const PORT = process.env.PORT;

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api/users", usersRoutes);

// Run Server
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
