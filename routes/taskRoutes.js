import express from 'express';
import { createTask, getTasks, updateTask, deleteTask } from '../controllers/taskController.js';

const router = express.Router();

router.post('/', createTask); // Create task
router.get('/', getTasks); // Get all tasks
router.put('/:id', updateTask); // Update task
router.delete('/:id', deleteTask); // Delete task

export default router;




