import { body, param } from "express-validator";
import { instructorModel } from "../../models/instructor.model.js";

export const createCourseValidation = [
  body("name")
    .notEmpty()
    .withMessage("name no puede estar vacío")
    .isString()
    .withMessage("name debe ser un string")
    .isLength({ min: 3, max: 100 })
    .withMessage("name debe tener de 3 a 100 caracteres"),
  body("description")
    .notEmpty()
    .withMessage("description no puede estar vacío")
    .isString()
    .withMessage("description debe ser texto")
    .isLength({ max: 300 })
    .withMessage("description debe tener hasta 300 caracteres"),
  body("hours")
    .notEmpty()
    .withMessage("hours no puede estar vacío")
    .isInt({ min: 1, max: 1000 })
    .withMessage("hours debe ser un entero entre 1 y 1000"),

  body("year")
    .notEmpty()
    .withMessage("year no puede estar vacío")
    .isInt({ min: 2000, max: new Date().getFullYear() + 1 })
    .withMessage("year debe ser un año válido"),
  body("instructor")
    .notEmpty()
    .withMessage("instructor no puede quedar vacío")
    .isMongoId()
    .withMessage("instructor debe ser un id válido de mongo")
    .custom(async (instructorId) => {
      const instructor = await instructorModel.findOne({
        _id: instructorId,
        isActive: true,
      });
      if (!instructor) {
        throw new Error("El instructor no existe");
      }
      return true;
    }),
];

export const updateCourseValidation = [
  body("name")
    .optional()
    .notEmpty()
    .withMessage("name no puede estar vacío")
    .isString()
    .withMessage("name debe ser un string")
    .isLength({ min: 3, max: 100 })
    .withMessage("name debe tener de 3 a 100 caracteres"),
  body("description")
    .optional()
    .notEmpty()
    .withMessage("description no puede estar vacío")
    .isString()
    .withMessage("description debe ser texto")
    .isLength({ max: 300 })
    .withMessage("description debe tener hasta 300 caracteres"),
  body("hours")
    .optional()
    .notEmpty()
    .withMessage("hours no puede estar vacío")
    .isInt({ min: 1, max: 1000 })
    .withMessage("hours debe ser un entero entre 1 y 1000"),

  body("year")
    .optional()
    .notEmpty()
    .withMessage("year no puede estar vacío")
    .isInt({ min: 2000, max: new Date().getFullYear() + 1 })
    .withMessage("year debe ser un año válido"),
  body("instructor")
    .optional()
    .notEmpty()
    .withMessage("instructor no puede quedar vacío")
    .isMongoId()
    .withMessage("instructor debe ser un id válido de mongo")
    .custom(async (instructorId) => {
      const instructor = await instructorModel.findOne({
        _id: instructorId,
        isActive: true,
      });
      if (!instructor) {
        throw new Error("El instructor no existe");
      }
      return true;
    }),
];

export const courseIdValidation = [
  param("id").isMongoId().withMessage("El id no es un ObjectId válido"),
];
