const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());

const port = 3000;

const tasks = [];

app.get('/tasks', (req, res, next) => {
    res.send(tasks);
});

app.post('/task', (req, res, next) => {
    try {
        tasks.push(req.body);
    }
    catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
    res.sendStatus(200);
});

app.listen(port, () => console.log(`Express app running on port ${port}!`));