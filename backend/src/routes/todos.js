import { Router } from "express";
import Todo from "../models/Todos.js";

const router = Router();

// GET all
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.json(todos);
  } catch (e) {
    res.status(500).json({ message: "Server error" });
  }
});

// POST create
router.post("/", async (req, res) => {
  try {
    const { title } = req.body;
    if (!title || !title.trim())
      return res.status(400).json({ message: "Title required" });
    const todo = await Todo.create({ title: title.trim() });
    res.status(201).json(todo);
  } catch (e) {
    res.status(500).json({ message: "Server error" });
  }
});

// PATCH update (toggle / edit)
router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const update = {};
    if (typeof req.body.completed === "boolean")
      update.completed = req.body.completed;
    if (typeof req.body.title === "string")
      update.title = req.body.title.trim();

    const todo = await Todo.findByIdAndUpdate(id, update, { new: true });
    if (!todo) return res.status(404).json({ message: "Not found" });
    res.json(todo);
  } catch (e) {
    res.status(500).json({ message: "Server error" });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Todo.findByIdAndDelete(id);
    if (!result) return res.status(404).json({ message: "Not found" });
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ message: "Server error" });
  }
});

// DELETE completed
router.delete("/", async (req, res) => {
  try {
    await Todo.deleteMany({ completed: true });
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
