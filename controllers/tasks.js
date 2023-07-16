import { v4 as uuidv4 } from 'uuid';
import Task from '../models/tasks.js';

//const tasks = [];

export const getTasks = (req, res, next) => {
    const generateDateString = (date) => {
        return `${date.getFullYear()}-${(date.getMonth() + 1) < 10 ? '0' : ''}${date.getMonth() + 1}-${date.getDate()}`
    };

    const today = new Date();

    Task.find({
        date: {
            $gte: generateDateString(today)
        }
    })
    .then(tasks => res.status(200).json(tasks))
    .catch(err => res.status(500).send({ error: err }));   
};

export const getTaskById = (req, res, next) => {
    Task.findById(req.params.id)
        .then(task => res.status(200).json(task))
        .catch(err => res.status(500).send({ error: err }));
};

export const postTask = (req, res, next) => {
    try {
        const taskDb = new Task(req.body);
        taskDb
            .save()
            .then(result => res.status(200).send('Creado con exito!'))
            .catch(err => res.status(500).send({ error: err }));
    }
    catch(err) {
        res.send(500, { error: err });
    }
};

export const updateTask = (req, res, next) => {
    Task.findByIdAndUpdate({ _id: req.body.id }, {
        name: req.body.name,
        date: req.body.date,
        description: req.body.description
    })
    .then(task => res.status(200).send('Editado con exito!'))
    .catch(err => res.status(500).send({ error: err }));
};

export const deleteTask = (req, res, next) => {
    Task.deleteOne({ _id: req.params.id })
        .then(task => res.status(200).send('Eliminado con exito!'))
        .catch(err => res.status(500).send({ error: err }))
};