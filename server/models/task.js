  
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    coursename: {type: String, required: true},
    description: {type: String, required: true},
    duration: {type: Number, required: true},
    date: {type: Date,required: true},
    priority: {type: Number, required: true}
}, {
    timestamps: true
});
 
module.exports = mongoose.model('Task', taskSchema); 