import express from "express";
import { createTodo , getTodos, getTodoById , updateTodo, toggleTodo } from "../controllers/todo.controller.js";

const route = express.Router();


// Create TODO
route.post("/add", createTodo);

// Get all TODOs
route.get('/', getTodos);

// Get TODO by ID
route.get('/:id', getTodoById);

// Update TODO by ID
route.put('/:id', updateTodo);

// Toggle TODO completion status by ID
route.patch('/:id/toggle', toggleTodo)


export default route;