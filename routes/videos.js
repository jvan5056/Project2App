const express =  require('express')
const router = express.Router()
const videosCtrl = require('../controllers/videosController')

router.get('/videos', videosCtrl.index)

router.get('/new', videosCtrl.new)

router.get('/videos/:id', videosCtrl.show)

router.get('/videos', videosCtrl.create)

module.exports = router