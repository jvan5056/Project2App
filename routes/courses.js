const express =  require('express')
const router = express.Router()
const coursesCtrl = require('../controllers/coursesController')

router.get('/courses', (req,res)=> {
    res.render('courses', {title: 'Courses page'})
 })

router.get('/courses', coursesCtrl.getAll)


// router.post('/courses/new', coursesCtrl.addCourse)

// router.get('/courses/:id', coursesCtrl.getCourse)

// router.delete('/courses', coursesCtrl.deleteCourse)

module.exports = router