import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import todosRouter from "./routes/todos.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/health", (_req, res) => res.json({ ok: true }));
app.use("/api/todos", todosRouter);
const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`API running on http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.error("Mongo connection error:", err.message);
    process.exit(1);
  });
