import { Router } from "express";
import {
  courseIdValidation,
  getCourseById,
  createCourseValidation,
  updateCourseValidation,
} from "../middlewares/validations/course.validation.js";
import {
  deleteCourse,
  getAllCourses,
  updateCourse,
} from "../controllers/course.controller.js";
import { validator } from "../middlewares/validator.middleware.js";

export const courseRouter = Router();

courseRouter.post("/course", createCourseValidation);
courseRouter.get("/course", getAllCourses);
courseRouter.get("/course/:id", courseIdValidation, validator, getCourseById);
courseRouter.put(
  "/course/:id",
  courseIdValidation,
  updateCourseValidation,
  validator,
  updateCourse,
);
courseRouter.delete("/course/:id", courseIdValidation, validator, deleteCourse);
