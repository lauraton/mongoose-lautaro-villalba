import express from "express";
import "dotenv/config";
import { startDB } from "./src/config/database.js";
import { studentRouter } from "./src/routes/student.route.js";

const PORT = process.env.PORT || 3003;
const app = express();

app.use(express.json());
app.use("/api", studentRouter);

app.listen(PORT, async () => {
  await startDB();
  console.log("Servidor corriendo en el puerto", PORT);
});
