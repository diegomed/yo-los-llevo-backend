import express from 'express';
import cors from 'cors';

import tasksRoutes from './routes/tasks.js'

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3001;

app.use('/feed', tasksRoutes);

app.listen(port, () => console.log(`Express app running on port ${port}!`));