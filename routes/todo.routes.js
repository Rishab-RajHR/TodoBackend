import express from "express";
import { createTodo , getTodos, getTodoById } from "../controllers/todo.controller.js";

const route = express.Router();


// Create TODO
route.post("/add", createTodo);

// Get all TODOs
route.get('/', getTodos);

// Get TODO by ID
route.get('/:id', getTodoById);

export default route;