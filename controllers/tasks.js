import { v4 as uuidv4 } from 'uuid';

const tasks = [];

export const getTasks = (req, res, next) => {
    res.status(200).json(tasks);
};

export const postTask = (req, res, next) => {
    try {
        const task = {...req.body, id: uuidv4()}
        tasks.push(task);
    }
    catch(err) {
        res.sendStatus(500);
    }
    res.sendStatus(200);
};