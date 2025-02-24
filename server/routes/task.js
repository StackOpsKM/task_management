  
const router = require('express').Router();
let Task = require('../models/task');

router.route('/').get((req,res) => {
    Task.find()
        .then(task => res.json(task))
        .catch(err => res.status(400).json('Error: ' +err));
});

router.route('/add').post((req,res) => {
    const coursename = req.body.coursename;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
    const priority = Number(req.body.priority);

    const newTask = new Task({coursename, description, duration, date,priority});

    newTask.save()
        .then(() => res.json('Task added!'))
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('/:id').get((req,res) => {
    Task.findById(req.params.id)
        .then(task => res.json(task))
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('/:id').delete((req,res) => {
    Task.findByIdAndDelete(req.params.id)
        .then(task => res.json('task deleted'))
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('/update/:id').post((req,res) => {
    Task.findById(req.params.id)
        .then(task => {
            task.coursename = req.body.coursename;
            task.description = req.body.description;
            task.duration = Number(req.body.duration);
            task.date = Date.parse(req.body.date);
            task.priority = Number(req.body.priority);

            task.save()
                .then(() => res.json('task updated !'))
                .catch(err => res.status(400).json('Error: '+err));
        })
        .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;