const createError = require('http-errors');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');
require('./config/database');

const indexRouter = require('./routes/index');
const videosRouter = require('./routes/videos');
const reviewsRouter = require('./routes/reviews');
//const coursesRouter = require('./routes/courses');

const app = express();

const PORT = 3000;

app.set('layout', './layouts/full-width');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(expressLayouts);
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'))

app.use('/classroom', indexRouter);
app.use('/videos', videosRouter);
app.use('/videos/reviews', reviewsRouter);
//app.use('/classroom/newCourse', indexRouter);

//catch 404 and forward to error handler

// app.use(function(req,res,next){
//     next(createError(404));
// });

//error handler

app.use(function(err, req, res, next){
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
})


app.listen(PORT,() => {
    console.log('App listening on port', PORT)
});


module.exports = app;