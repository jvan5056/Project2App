//goes in config folder in database.js file
const mongoose = require('mongoose')

// console.log('These are my seeds!')

// //connect to database
// mongoose.connect('mongodb://localhost:27017/my-personal-math-classroom', {
//     useNewUrlParser: true
// })

// const db = mongoose.connection

// db.on('connected',  () => {
//     console.log(`Connect to MongoDB at ${db.host}:${db.port} `)
// })
//for above in server file require below
require('./config/database')




//Mongoose Schema - goes in model folder in given js file
//const mongooes = require('mongoose)
// const Schema = mongoose.Schema

// const courseSchema = new Schema({
//     name: String,
//     topic: String,
//     image: String,
//     lesson: String,
//     reference: String,
//     example: String,
//     video: String

// })

// const Course = mongoose.model('Course', courseSchema)
//next we can use functions on this model ...see monngoose documentation..all are asynchronous!!




//goes in controllers folder in given controller.js file
const Course = require('./models/course') //

function createCourse(){
    let newCourse = new Course({
        name: "AlgebraTwo", //req.body.name
        topic: "Conic Sections", //req.body.topic
        image: "https://images.app.goo.gl/5d44aXLwa4Jg6yBC8",
        lesson: "Exponential expressions are algebraic expressions with a coefficient, one or more variables, and one or more exponents. For example, in the expression 3x ^ 4 or 3*x^4,-3 is the coefficient-x is the base-4 is the exponent OR 3 is multiplied by x, 4 times, = 3 * (x * x * x * x). An expression can also be raised to an exponent. For example, for (3x)^4 or 3x ^ 4,the expression 3xis multiplied by itself 4 times:= 3x * 3x * 3x * 3x = 81x. Notice how 3x^4 does not equal (3x)^4!",
        reference: "https://www.khanacademy.org/test-prep/sat/x0a8c2e5f:untitled-652/x0a8c2e5f:passport-to-advanced-math-lessons-by-skill/a/gtp--sat-math--article--radicals-and-rational-exponents--lesson",
        example: "https://images.app.goo.gl/sj1J5yKQvikrUEir9",
        video: "https://www.youtube.com/watch?v=fvUyjBpinv8"
    })

    newCourse.save( () => console.log('new course created'))
       //await newCourse.save()
}
//createCourse()

function findCourse(){
    let algebra = Course.findOne({ name: "Algebra" }, (err, course) => {
        //res.render('index.ejs', { course })
        console.log('The course found is: ', course)
    })
}

//findCourse()


function findAllCourses(){
    let classes = Course.find({})
    console.log('The courses are', classes)
}

//findAllCourses()


function updateCourse(){
    Course.findOneAndUpdate({ topic: 'Conic Sections'}, { topic: 'Solving Equations'}).then(() => {
        console.log('Course was updated!')
    })

}

//updateCourse()

async function deleteCourse(){
     await Course.deleteOne({ name: 'AlgebraTwo'})
     Course.deleteOne ({ name: 'AlgebraTwo'}).then(() => {
        console.log('Course was deleted!')
    })

}

//deleteCourse()