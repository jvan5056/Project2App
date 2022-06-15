const mongoose = require('mongoose')
const Schema = mongoose.Schema

const courseSchema = new Schema({
    name: String,
    topic: String,
    image: String,
    lesson: String,
    reference: String,
    example: String,
    video: String

})

const Course = mongoose.model('Course', courseSchema)
// //next we can use functions on this model in seeds.js root file...see monngoose documentation..all are asynchronous!!
//must export the model to use in controller
module.exports = Course