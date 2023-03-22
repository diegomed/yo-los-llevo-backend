const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const port = 3000;

app.get('/', (req, res) => {
    const tasks = [
        { name: 'Diego Medina', description: 'lorem ipsum' },
        { name: 'Diego Medina', description: 'lorem ipsum' },
        { name: 'Diego Medina', description: 'lorem ipsum' },
        { name: 'Diego Medina', description: 'lorem ipsum' },
        { name: 'Diego Medina', description: 'lorem ipsum' },
        { name: 'Diego Medina', description: 'lorem ipsum' },
        { name: 'Diego Medina', description: 'lorem ipsum' },
        { name: 'Diego Medina', description: 'lorem ipsum' },
        { name: 'Diego Medina', description: 'lorem ipsum' },
        { name: 'Diego Medina', description: 'lorem ipsum' },
        { name: 'Diego Medina', description: 'lorem ipsum' },
        { name: 'Diego Medina', description: 'lorem ipsum' },
        { name: 'Diego Medina', description: 'lorem ipsum' },
        { name: 'Diego Medina', description: 'lorem ipsum' }
    ]
    res.send(tasks);
});

app.listen(port, () => console.log(`Express app running on port ${port}!`));