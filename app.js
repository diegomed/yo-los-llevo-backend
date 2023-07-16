import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import tasksRoutes from './routes/tasks.js'

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3001;

app.use('/feed', tasksRoutes);

mongoose.connect('mongodb+srv://diegomed:asdf1234@cluster0.rnhwfcq.mongodb.net/yo-los-llevo?retryWrites=true&w=majority')
    .then(result => {
        app.listen(port, () => console.log(`Express app running on port ${port}!`));
    })
    .catch(err => {
        console.error(err)
    });