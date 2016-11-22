import { Router } from 'express';
import { TaskController } from '../controllers';
const router = new Router();

// Get all Tasks
router.route('/tasks').get(TaskController.getTasks);
// Add a new Task
router.route('/tasks').post(TaskController.addTask);

// Get one task by cuid
router.route('/tasks/:id').get(TaskController.getTask);
// Update one task by cuid
router.route('/tasks/:id').patch(TaskController.updateTask);

// Delete a task by cuid
router.route('/tasks/:id').delete(TaskController.deleteTask);

export default router;
