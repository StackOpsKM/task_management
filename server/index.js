const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');

const db = require('./db')
const taskRouter = require('./routes/task');
const courseRouter = require('./routes/course');

const app = express(); 
const apiPort = 5000


app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/tasks', taskRouter);
app.use('/courses', courseRouter); 

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))