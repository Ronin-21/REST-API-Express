import { Router } from "express";
import {
  addUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/users.controller.js";

const router = Router();

// Define routes and controllers
router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", addUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
