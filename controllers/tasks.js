const tasks = [];

export const getTasks = (req, res, next) => {
    res.status(200).json(tasks);
};

export const postTask = (req, res, next) => {
    try {
        tasks.push(req.body);
    }
    catch(err) {
        res.sendStatus(500);
    }
    res.sendStatus(200);
};