import { model, Schema } from "mongoose";

const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  dni: {
    type: Number,
    required: true,
  },
  address: {
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
  },
});

export const studentModel = model("student", studentSchema);
