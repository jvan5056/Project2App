const express = require('express')

const router = express.Router()

router.get('/videos', function(req,res,next){
   res.redirect('/videos')
})

module.exports = router