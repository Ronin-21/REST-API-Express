import express from "express";
import morgan from "morgan";
import usersRoutes from "./routes/users.routes.js";

// Initilization
const app = express();
app.disable("x-powered-by");

// Settings
const PORT = process.env.PORT ?? 4000;

// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api/users", usersRoutes);

// Run Server
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
