import mongoose from "mongoose";

export const startDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/db-mongoose-laurato");
    console.log("Base de datos conectada.");
  } catch (error) {
    console.log(error);
    console.log("Error al conectar la base de datos");
  }
};
