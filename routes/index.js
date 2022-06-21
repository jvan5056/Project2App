const express = require('express')
const router = express.Router()
const coursesCtrl = require('../controllers/coursesController')


// router.get('/', (req,res)=> {
//    res.render('index', {title: 'My Personal Math Classroom'})
// })

router.get('/', coursesCtrl.index)

router.get('/newCourse', coursesCtrl.newCourse)

router.post('/', coursesCtrl.createCourse)


router.get('/algebra', (req,res)=> {
   res.render('algebra', {title:'Algebra page'})
})

router.get('/calculus', (req,res)=> {
   res.render('calculus', {title:'Calculus page'})
})

router.get('/resources', (req,res)=> {
   res.render('resources', {title:'Resources page'})
})

router.get('/calculator', (req,res)=> {
   res.render('calculator', {title:'Calculator page'})
})

router.get('/locator', (req,res)=> {
   res.render('locator', {title:'Locator page'})
})

router.get('/courses', (req,res)=> {
   res.render('courses', {title:'Math Courses page'})
})

// router.get('/videos', function(req,res,next){
//    res.redirect('/views/videos/videos.ejs')
// })

router.get('/:id', coursesCtrl.showCourse)

router.put('/:id', coursesCtrl.updateCourse)

router.delete('/:id', coursesCtrl.deleteCourse)

module.exports = router