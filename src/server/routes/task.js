import { Router, } from 'express';
import { TaskController, } from '../controllers';
import { isLoggedIn, } from './auth';

const router = new Router();

// Get all Tasks
router.route('/tasks').get(TaskController.getTasks);

// Add a new Task
router.route('/tasks').post(isLoggedIn, TaskController.addTask);

// Get one task by cuid
router.route('/tasks/:id').get(TaskController.getTask);

// Update one task by cuid
router.route('/tasks/:id').patch(isLoggedIn, TaskController.updateTask);

// Delete a task by cuid
router.route('/tasks/:id').delete(isLoggedIn, TaskController.deleteTask);

export default router;
