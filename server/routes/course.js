const router = require('express').Router();
const course = require('../models/course');
let Course = require('../models/course');

router.route('/').get((req,res) => {
    Course.find()
        .then(courses => res.json(courses))
        .catch(err => res.status(400).json('Error: ' +err));
});

router.route('/add').post((req,res) => {
    const coursename = req.body.coursename;
    const newCourse = new course({coursename});

    newCourse.save()
        .then(() => res.json('Course added!'))
        .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;