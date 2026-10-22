import { Router } from "express";
import {
  getStudentById,
  createStudent,
  getAllStudents,
  updateStudent,
  deleteStudent,
} from "../controllers/student.controller.js";

export const studentRouter = Router();

studentRouter.post("/students", createStudent);

studentRouter.get("/students", getAllStudents);

studentRouter.get("/students/:id", getStudentById);

studentRouter.update("/students/:id", updateStudent);

studentRouter.delete("/students/:id", deleteStudent);
