import express from 'express';

import { getTasks, postTask, getTaskById, updateTask, deleteTask } from '../controllers/tasks.js';

const router = express.Router();

router.get('/tasks', getTasks);

router.get('/task/:id', getTaskById);

router.post('/task', postTask);

router.put('/task', updateTask);

router.delete('/task/:id', deleteTask);

export default router;