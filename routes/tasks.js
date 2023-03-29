import express from 'express';

import { getTasks, postTask } from '../controllers/tasks.js';

const router = express.Router();

router.get('/tasks', getTasks);

router.post('/task', postTask);

export default router;