const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const courseSchema = new Schema({
    coursename: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlwngth: 3
    },
}, {
    timestamps: true
});
 

module.exports = mongoose.model('Course', courseSchema);