import { Router } from "express";
import {
  createInstructor,
  deleteInstructor,
  getAllInstructors,
  getInstructorById,
  updateInstructor,
} from "../controllers/instructor.controller.js";
import {
  instructorIdValidation,
  updateInstructorValidation,
} from "../middlewares/validations/instructor.validation.js";
import { validator } from "../middlewares/validator.middleware.js";

export const instructorRouter = Router();

instructorRouter.put("/instructor", createInstructor);

instructorRouter.get("/instructor", getAllInstructors);

instructorRouter.get(
  "/instructor/:id",
  instructorIdValidation,
  validator,
  getInstructorById,
);

instructorRouter.put(
  "/instructor/:id",
  instructorIdValidation,
  updateInstructorValidation,
  validator,
  updateInstructor,
);

instructorRouter.delete(
  "/instructor/:id",
  instructorIdValidation,
  validator,
  deleteInstructor,
);
