import { v4 as uuidv4 } from 'uuid';

const tasks = [];

export const getTasks = (req, res, next) => {
    const today = new Date();    
    const tasksSinceToday = tasks.filter(t => new Date(t.date) > new Date() || new Date(t.date).toLocaleDateString('es-ES', { timeZone:"UTC"}) === new Date().toLocaleDateString('es-ES', { timeZone:"UTC"})); // This was done to compare exact same dates
    res.status(200).json(tasksSinceToday);
};

export const postTask = (req, res, next) => {
    try {
        const task = {...req.body, id: uuidv4()}
        tasks.push(task);
        tasks.sort((a, b) => new Date(a.date) - new Date(b.date));
    }
    catch(err) {
        res.sendStatus(500);
    }
    res.sendStatus(200);
};