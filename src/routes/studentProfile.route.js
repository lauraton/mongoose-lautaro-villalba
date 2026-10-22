import { Router } from "express";
import {
  createStudentProfile,
  deleteStudentProfile,
  getAllStudentProfiles,
  getStudentProfileById,
  updateStudentProfile,
} from "../controllers/studentProfile.controller.js";
import {
  createStudentProfileValidation,
  studentProfileIdValidation,
  updateStudentProfileValidation,
} from "../middlewares/validations/studentProfile.validation.js";
import { validator } from "../middlewares/validator.middleware.js";

export const studentProfileRouter = Router();

studentProfileRouter.post(
  "/studentProfile",
  createStudentProfileValidation,
  validator,
  createStudentProfile,
);

studentProfileRouter.get("/studentProfile", getAllStudentProfiles);

studentProfileRouter.get(
  "/studentProfile/:id",
  studentProfileIdValidation,
  validator,
  getStudentProfileById,
);

studentProfileRouter.put(
  "/studentProfile/:id",
  studentProfileIdValidation,
  updateStudentProfileValidation,
  validator,
  updateStudentProfile,
);

studentProfileRouter.delete(
  "/studentProfile/:id",
  studentProfileIdValidation,
  validator,
  deleteStudentProfile,
);
