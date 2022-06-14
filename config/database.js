const mongoose = require('mongoose');

console.log('These are my seeds!')

//connect to database
mongoose.connect('mongodb+srv://jvanexel:jv_Huzzah89!@sei.tseo7.mongodb.net/SEI?retryWrites=true&w=majority'
//mongodb://localhost:27017/my-personal-math-classroom'
, {
    useNewUrlParser: true
})

const db = mongoose.connection

db.on('connected',  () => {
    console.log(`Connect to MongoDB at ${db.host}:${db.port} `)
})
//for above in server file require below
//require('config/dataabase')




























//seeds.js arrays below

// //9 math courses array
// const courses = ['Algebra 1', 'Algebra 2','Geometry', 'Precalculus', 'Calculus', 'AP Calculus', 'Statistics', 'AP Statistics', 'AMDM'];

// //topics for each math course above 17, 18, 17, 19, 10, 14, 8, 9, 10 topics respectively
// const algebraOneTopics = ['Exponents and Radicals','Expressions and Equations', 'Solving Linear Equations', 'Linear Inequalities', 
// 'Absolute value', 'Polynomials', 'Data and Graphs', 'Word Problems', 'Sequences', 'Relations and Functions', 'Linear Functions', 
// 'Linear Inequalities', 'Quadratic Functions', 'Exponential Functions', 'Radical Functions', 'Rational Functions', 'Transformations and Translations']
// const algebraTwoTopics = ['Expressions and Equations', 'Inequalities', 'Functions', 'Systems of Equations', 'Matrices', 'Real and Complex Numbers',
// 'Quadratic Functions', 'Polynomials', 'Radical Functions', 'Rational Functions', 'Functions Operations', 'Families of Functions',
// 'Logarithms', 'Exponential and Logarithmic Functions', 'Conic Sections', 'Trigonometry', 'Sequences and Series', 'Probability and Statistics']
// const geometryTopics = ['Points, lines, line segments, and planes', 'Angles', 'Parallel and Perpendicular lines', 'Triangles', 'Two and Three-Dimensional Figures', 
// 'Logic', 'Congruent Figures and Triangles', 'Transformations', 'Quadralaterals', 'Symmetry and Similarity', 'Trigonometry',
// 'Area and Perimeter', 'Surface Area and Volume', 'Circles' , 'Circles and Parabolas in the Coordinate plane', 'Measurement', 'Vectors']
// const precalculusTopics = ['Functions', 'Systems of Equations and Inequalities', 'Matrices', 'Real and Complex Numbers',
// 'Quadratic Functions', 'Polynomials', 'Radical Functions', 'Rational Functions', 'Functions Operations', 'Families of Functions', 
// 'Exponential and Logarithmic Functions', 'Conic Sections', 'Trigonometry',  'Trigonometric Functions and Identities', 
// 'Sequences and Series', 'Probability and Statistics', 'Limits', 'Continuity', 'Introduction to Derivatives']
// const calculusTopics = ['Functions', 'Families of Functions', 'Trigonometric Functions and Identities', 'Exponential and Logarithmic Functions',
//  'Limits', 'Rational Functions', 'Continuity', 'Derivatives', 'Calculate Derivatives', 'Calculate Higher Derivatives']
// const apCalculusTopics = ['Functions', 'Families of Functions', 'Trigonometric Functions and Identities', 'Exponential and Logarithmic Functions',
// 'Limits', 'Rational Functions', 'Continuity', 'Derivatives', 'Calculate Derivatives', 'Calculate Higher Derivatives', 'Applications of Derivatives', 
// 'Antiderivatives and Integration', 'Applications of Integration', 'AP Exam Review']
// const statisticsTopics = ['Statistical Definitions', 'Descriptive Statistics', 'Probability', 'Probability Distributions', 
// 'Inferential Statistics', 'Regression', 'Data, Graphs, and Functions', 'Regressional Analysis']
// const apStatisticsTopics = ['Statistical Definitions', 'Descriptive Statistics', 'Probability', 'Probability Distributions', 
// 'Inferential Statistics', 'Regression', 'Data, Graphs, and Functions', 'Regressional Analysis', 'AP Exam Review']
// const amdmTopics = ['Analyzing Numerical Data', 'Probability', 'Statistical Studies', 'Recursion Models', 'Trigonometry',
// 'Regression Models', 'Financial Decisions', 'Networks and Graphs', 'Matrix Applications', 'Voting Methods']

// //lessons and details for each topic for each course
// const algebraOneLessons = [
//     {
//     topic: 'Exponents and Radicals',
//     image: 'https://images.app.goo.gl/5d44aXLwa4Jg6yBC8',
//     lesson: 'Exponential expressions are algebraic expressions with a coefficient, one or more variables, and one or more exponents. For example, in the expression 3x ^ 4 or 3*x^4,-3 is the coefficient-x is the base-4 is the exponent OR 3 is multiplied by x, 4 times, = 3 * (x * x * x * x). An expression can also be raised to an exponent. For example, for (3x)^4 or 3x ^ 4,the expression 3xis multiplied by itself 4 times:= 3x * 3x * 3x * 3x = 81x. Notice how 3x^4 does not equal (3x)^4!',
//     reference: 'https://www.khanacademy.org/test-prep/sat/x0a8c2e5f:untitled-652/x0a8c2e5f:passport-to-advanced-math-lessons-by-skill/a/gtp--sat-math--article--radicals-and-rational-exponents--lesson',
//     example: 'https://images.app.goo.gl/sj1J5yKQvikrUEir9',
//     video: 'https://www.youtube.com/watch?v=fvUyjBpinv8'
//     },
//     {
//     topic:'Expressions and Equations',
//     image: 'https://images.app.goo.gl/5d44aXLwa4Jg6yBC8',
//     lesson: 'Expressions are consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a coefficient, one or more variables, and one or more exponents. For example, in the expression 3x ^ 4 or 3*x^4,-3 is the coefficient-x is the base-4 is the exponent OR 3 is multiplied by x, 4 times, = 3 * (x * x * x * x). An expression can also be raised to an exponent. For example, for (3x)^4 or 3x ^ 4,the expression 3xis multiplied by itself 4 times:= 3x * 3x * 3x * 3x = 81x. Notice how 3x^4 does not equal (3x)^4!',
//     reference: 'https://www.khanacademy.org/test-prep/sat/x0a8c2e5f:untitled-652/x0a8c2e5f:passport-to-advanced-math-lessons-by-skill/a/gtp--sat-math--article--radicals-and-rational-exponents--lesson',
//     example: 'https://images.app.goo.gl/sj1J5yKQvikrUEir9',
//     video: 'https://www.youtube.com/watch?v=fvUyjBpinv8'
//     }, 
//     {
//     topic: 'Solving Linear Equations',
//     image: 'https://images.app.goo.gl/5d44aXLwa4Jg6yBC8',
//     lesson: 'Solving Linear equations is eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  with a coefficient, one or more variables, and one or more exponents. For example, in the expression 3x ^ 4 or 3*x^4,-3 is the coefficient-x is the base-4 is the exponent OR 3 is multiplied by x, 4 times, = 3 * (x * x * x * x). An expression can also be raised to an exponent. For example, for (3x)^4 or 3x ^ 4,the expression 3xis multiplied by itself 4 times:= 3x * 3x * 3x * 3x = 81x. Notice how 3x^4 does not equal (3x)^4!',
//     reference: 'https://www.khanacademy.org/test-prep/sat/x0a8c2e5f:untitled-652/x0a8c2e5f:passport-to-advanced-math-lessons-by-skill/a/gtp--sat-math--article--radicals-and-rational-exponents--lesson',
//     example: 'https://images.app.goo.gl/sj1J5yKQvikrUEir9',
//     video: 'https://www.youtube.com/watch?v=fvUyjBpinv8'
//     }, 
//     {
//     topic: 'Linear Inequalities',
//     image: 'https://images.app.goo.gl/5d44aXLwa4Jg6yBC8',
//     lesson: 'Linear Inequalities expressions are algebraic expressions with symbols, >, <, etc. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  a coefficient, one or more variables, and one or more exponents. For example, in the expression 3x ^ 4 or 3*x^4,-3 is the coefficient-x is the base-4 is the exponent OR 3 is multiplied by x, 4 times, = 3 * (x * x * x * x). An expression can also be raised to an exponent. For example, for (3x)^4 or 3x ^ 4,the expression 3xis multiplied by itself 4 times:= 3x * 3x * 3x * 3x = 81x. Notice how 3x^4 does not equal (3x)^4!',
//     reference: 'https://www.khanacademy.org/test-prep/sat/x0a8c2e5f:untitled-652/x0a8c2e5f:passport-to-advanced-math-lessons-by-skill/a/gtp--sat-math--article--radicals-and-rational-exponents--lesson',
//     example: 'https://images.app.goo.gl/sj1J5yKQvikrUEir9',
//     video: 'https://www.youtube.com/watch?v=fvUyjBpinv8'
//     }, 
//     {
//     topic: 'Absolute value',
//     image: 'https://images.app.goo.gl/5d44aXLwa4Jg6yBC8',
//     lesson: 'Absolute value expressions are algebraic expressions with an adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut coefficient, one or more variables, and one or more exponents. For example, in the expression 3x ^ 4 or 3*x^4,-3 is the coefficient-x is the base-4 is the exponent OR 3 is multiplied by x, 4 times, = 3 * (x * x * x * x). An expression can also be raised to an exponent. For example, for (3x)^4 or 3x ^ 4,the expression 3xis multiplied by itself 4 times:= 3x * 3x * 3x * 3x = 81x. Notice how 3x^4 does not equal (3x)^4!',
//     reference: 'https://www.khanacademy.org/test-prep/sat/x0a8c2e5f:untitled-652/x0a8c2e5f:passport-to-advanced-math-lessons-by-skill/a/gtp--sat-math--article--radicals-and-rational-exponents--lesson',
//     example: 'https://images.app.goo.gl/sj1J5yKQvikrUEir9',
//     video: 'https://www.youtube.com/watch?v=fvUyjBpinv8'
//     },  
//     {
//     topic: 'Polynomials', 
//     image: 'https://images.app.goo.gl/5d44aXLwa4Jg6yBC8',
//     lesson: 'Polynomials expressions are algebraic expressions with consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a coefficient, one or more variables, and one or more exponents. For example, in the expression 3x ^ 4 or 3*x^4,-3 is the coefficient-x is the base-4 is the exponent OR 3 is multiplied by x, 4 times, = 3 * (x * x * x * x). An expression can also be raised to an exponent. For example, for (3x)^4 or 3x ^ 4,the expression 3xis multiplied by itself 4 times:= 3x * 3x * 3x * 3x = 81x. Notice how 3x^4 does not equal (3x)^4!',
//     reference: 'https://www.khanacademy.org/test-prep/sat/x0a8c2e5f:untitled-652/x0a8c2e5f:passport-to-advanced-math-lessons-by-skill/a/gtp--sat-math--article--radicals-and-rational-exponents--lesson',
//     example: 'https://images.app.goo.gl/sj1J5yKQvikrUEir9',
//     video: 'https://www.youtube.com/watch?v=fvUyjBpinv8'
//     }, 
//     {
//     topic: 'Data and Graphs', 
//     image: 'https://images.app.goo.gl/5d44aXLwa4Jg6yBC8',
//     lesson: 'Data and Graphs are consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut algebraic expressions with a coefficient, one or more variables, and one or more exponents. For example, in the expression 3x ^ 4 or 3*x^4,-3 is the coefficient-x is the base-4 is the exponent OR 3 is multiplied by x, 4 times, = 3 * (x * x * x * x). An expression can also be raised to an exponent. For example, for (3x)^4 or 3x ^ 4,the expression 3xis multiplied by itself 4 times:= 3x * 3x * 3x * 3x = 81x. Notice how 3x^4 does not equal (3x)^4!',
//     reference: 'https://www.khanacademy.org/test-prep/sat/x0a8c2e5f:untitled-652/x0a8c2e5f:passport-to-advanced-math-lessons-by-skill/a/gtp--sat-math--article--radicals-and-rational-exponents--lesson',
//     example: 'https://images.app.goo.gl/sj1J5yKQvikrUEir9',
//     video: 'https://www.youtube.com/watch?v=fvUyjBpinv8'
//     }, 
//     {
//     topic: 'Word Problems',
//     image: 'https://images.app.goo.gl/5d44aXLwa4Jg6yBC8',
//     lesson: 'Word problems are consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut algebraic expressions with a coefficient, one or more variables, and one or more exponents. For example, in the expression 3x ^ 4 or 3*x^4,-3 is the coefficient-x is the base-4 is the exponent OR 3 is multiplied by x, 4 times, = 3 * (x * x * x * x). An expression can also be raised to an exponent. For example, for (3x)^4 or 3x ^ 4,the expression 3xis multiplied by itself 4 times:= 3x * 3x * 3x * 3x = 81x. Notice how 3x^4 does not equal (3x)^4!',
//     reference: 'https://www.khanacademy.org/test-prep/sat/x0a8c2e5f:untitled-652/x0a8c2e5f:passport-to-advanced-math-lessons-by-skill/a/gtp--sat-math--article--radicals-and-rational-exponents--lesson',
//     example: 'https://images.app.goo.gl/sj1J5yKQvikrUEir9',
//     video: 'https://www.youtube.com/watch?v=fvUyjBpinv8'
//     }, 
//     {
//     topic: 'Sequences',
//     image: 'https://images.app.goo.gl/5d44aXLwa4Jg6yBC8',
//     lesson: 'Sequences are elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut expressions are algebraic expressions with a coefficient, one or more variables, and one or more exponents. For example, in the expression 3x ^ 4 or 3*x^4,-3 is the coefficient-x is the base-4 is the exponent OR 3 is multiplied by x, 4 times, = 3 * (x * x * x * x). An expression can also be raised to an exponent. For example, for (3x)^4 or 3x ^ 4,the expression 3xis multiplied by itself 4 times:= 3x * 3x * 3x * 3x = 81x. Notice how 3x^4 does not equal (3x)^4!',
//     reference: 'https://www.khanacademy.org/test-prep/sat/x0a8c2e5f:untitled-652/x0a8c2e5f:passport-to-advanced-math-lessons-by-skill/a/gtp--sat-math--article--radicals-and-rational-exponents--lesson',
//     example: 'https://images.app.goo.gl/sj1J5yKQvikrUEir9',
//     video: 'https://www.youtube.com/watch?v=fvUyjBpinv8'
//     }, 
//     {
//     topic: 'Relations and Functions',
//     image: 'https://images.app.goo.gl/5d44aXLwa4Jg6yBC8',
//     lesson: 'Relations and functions are algebraic consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  with a coefficient, one or more variables, and one or more exponents. For example, in the expression 3x ^ 4 or 3*x^4,-3 is the coefficient-x is the base-4 is the exponent OR 3 is multiplied by x, 4 times, = 3 * (x * x * x * x). An expression can also be raised to an exponent. For example, for (3x)^4 or 3x ^ 4,the expression 3xis multiplied by itself 4 times:= 3x * 3x * 3x * 3x = 81x. Notice how 3x^4 does not equal (3x)^4!',
//     reference: 'https://www.khanacademy.org/test-prep/sat/x0a8c2e5f:untitled-652/x0a8c2e5f:passport-to-advanced-math-lessons-by-skill/a/gtp--sat-math--article--radicals-and-rational-exponents--lesson',
//     example: 'https://images.app.goo.gl/sj1J5yKQvikrUEir9',
//     video: 'https://www.youtube.com/watch?v=fvUyjBpinv8'
//     }, 
//     {
//     topic: 'Linear Functions', 
//     image: 'https://images.app.goo.gl/5d44aXLwa4Jg6yBC8',
//     lesson: 'Linear Functions are adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut algebraic expressions with a coefficient, one or more variables, and one or more exponents. For example, in the expression 3x ^ 4 or 3*x^4,-3 is the coefficient-x is the base-4 is the exponent OR 3 is multiplied by x, 4 times, = 3 * (x * x * x * x). An expression can also be raised to an exponent. For example, for (3x)^4 or 3x ^ 4,the expression 3xis multiplied by itself 4 times:= 3x * 3x * 3x * 3x = 81x. Notice how 3x^4 does not equal (3x)^4!',
//     reference: 'https://www.khanacademy.org/test-prep/sat/x0a8c2e5f:untitled-652/x0a8c2e5f:passport-to-advanced-math-lessons-by-skill/a/gtp--sat-math--article--radicals-and-rational-exponents--lesson',
//     example: 'https://images.app.goo.gl/sj1J5yKQvikrUEir9',
//     video: 'https://www.youtube.com/watch?v=fvUyjBpinv8'
//     },
//     { 
//     topic: 'Linear Inequalities',
//     image: 'https://images.app.goo.gl/5d44aXLwa4Jg6yBC8',
//     lesson: 'Linear Inequalities are fksdkgtur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut algebraic expressions with a coefficient, one or more variables, and one or more exponents. For example, in the expression 3x ^ 4 or 3*x^4,-3 is the coefficient-x is the base-4 is the exponent OR 3 is multiplied by x, 4 times, = 3 * (x * x * x * x). An expression can also be raised to an exponent. For example, for (3x)^4 or 3x ^ 4,the expression 3xis multiplied by itself 4 times:= 3x * 3x * 3x * 3x = 81x. Notice how 3x^4 does not equal (3x)^4!',
//     reference: 'https://www.khanacademy.org/test-prep/sat/x0a8c2e5f:untitled-652/x0a8c2e5f:passport-to-advanced-math-lessons-by-skill/a/gtp--sat-math--article--radicals-and-rational-exponents--lesson',
//     example: 'https://images.app.goo.gl/sj1J5yKQvikrUEir9',
//     video: 'https://www.youtube.com/watch?v=fvUyjBpinv8'
//     }, 
//     {  
//     topic: 'Quadratic Functions', 
//     image: 'https://images.app.goo.gl/5d44aXLwa4Jg6yBC8',
//     lesson: 'Quadratic Functions are sdfktur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  algebraic expressions with a coefficient, one or more variables, and one or more exponents. For example, in the expression 3x ^ 4 or 3*x^4,-3 is the coefficient-x is the base-4 is the exponent OR 3 is multiplied by x, 4 times, = 3 * (x * x * x * x). An expression can also be raised to an exponent. For example, for (3x)^4 or 3x ^ 4,the expression 3xis multiplied by itself 4 times:= 3x * 3x * 3x * 3x = 81x. Notice how 3x^4 does not equal (3x)^4!',
//     reference: 'https://www.khanacademy.org/test-prep/sat/x0a8c2e5f:untitled-652/x0a8c2e5f:passport-to-advanced-math-lessons-by-skill/a/gtp--sat-math--article--radicals-and-rational-exponents--lesson',
//     example: 'https://images.app.goo.gl/sj1J5yKQvikrUEir9',
//     video: 'https://www.youtube.com/watch?v=fvUyjBpinv8'
//     },
//     {
//     topic: 'Exponential Functions', 
//     image: 'https://images.app.goo.gl/5d44aXLwa4Jg6yBC8',
//     lesson: 'Exponential Functions are consetetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  algebraic expressions with a coefficient, one or more variables, and one or more exponents. For example, in the expression 3x ^ 4 or 3*x^4,-3 is the coefficient-x is the base-4 is the exponent OR 3 is multiplied by x, 4 times, = 3 * (x * x * x * x). An expression can also be raised to an exponent. For example, for (3x)^4 or 3x ^ 4,the expression 3xis multiplied by itself 4 times:= 3x * 3x * 3x * 3x = 81x. Notice how 3x^4 does not equal (3x)^4!',
//     reference: 'https://www.khanacademy.org/test-prep/sat/x0a8c2e5f:untitled-652/x0a8c2e5f:passport-to-advanced-math-lessons-by-skill/a/gtp--sat-math--article--radicals-and-rational-exponents--lesson',
//     example: 'https://images.app.goo.gl/sj1J5yKQvikrUEir9',
//     video: 'https://www.youtube.com/watch?v=fvUyjBpinv8'
//     }, 
//     {
//     topic:'Radical Functions',
//     image: 'https://images.app.goo.gl/5d44aXLwa4Jg6yBC8',
//     lesson: 'Radical Functions are adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  algebraic expressions with a coefficient, one or more variables, and one or more exponents. For example, in the expression 3x ^ 4 or 3*x^4,-3 is the coefficient-x is the base-4 is the exponent OR 3 is multiplied by x, 4 times, = 3 * (x * x * x * x). An expression can also be raised to an exponent. For example, for (3x)^4 or 3x ^ 4,the expression 3xis multiplied by itself 4 times:= 3x * 3x * 3x * 3x = 81x. Notice how 3x^4 does not equal (3x)^4!',
//     reference: 'https://www.khanacademy.org/test-prep/sat/x0a8c2e5f:untitled-652/x0a8c2e5f:passport-to-advanced-math-lessons-by-skill/a/gtp--sat-math--article--radicals-and-rational-exponents--lesson',
//     example: 'https://images.app.goo.gl/sj1J5yKQvikrUEir9',
//     video: 'https://www.youtube.com/watch?v=fvUyjBpinv8'
//     },
//     { 
//     topic: 'Rational Functions', 
//     image: 'https://images.app.goo.gl/5d44aXLwa4Jg6yBC8',
//     lesson: 'Rational Functions are tetsdiur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  algebraic expressions with a coefficient, one or more variables, and one or more exponents. For example, in the expression 3x ^ 4 or 3*x^4,-3 is the coefficient-x is the base-4 is the exponent OR 3 is multiplied by x, 4 times, = 3 * (x * x * x * x). An expression can also be raised to an exponent. For example, for (3x)^4 or 3x ^ 4,the expression 3xis multiplied by itself 4 times:= 3x * 3x * 3x * 3x = 81x. Notice how 3x^4 does not equal (3x)^4!',
//     reference: 'https://www.khanacademy.org/test-prep/sat/x0a8c2e5f:untitled-652/x0a8c2e5f:passport-to-advanced-math-lessons-by-skill/a/gtp--sat-math--article--radicals-and-rational-exponents--lesson',
//     example: 'https://images.app.goo.gl/sj1J5yKQvikrUEir9',
//     video: 'https://www.youtube.com/watch?v=fvUyjBpinv8'
//     }, 
//     {
//     topic: 'Transformations and Translations',
//     image: 'https://images.app.goo.gl/5d44aXLwa4Jg6yBC8',
//     lesson: 'Transformations and Translations are fundumwele adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut algebraic expressions with a coefficient, one or more variables, and one or more exponents. For example, in the expression 3x ^ 4 or 3*x^4,-3 is the coefficient-x is the base-4 is the exponent OR 3 is multiplied by x, 4 times, = 3 * (x * x * x * x). An expression can also be raised to an exponent. For example, for (3x)^4 or 3x ^ 4,the expression 3xis multiplied by itself 4 times:= 3x * 3x * 3x * 3x = 81x. Notice how 3x^4 does not equal (3x)^4!',
//     reference: 'https://www.khanacademy.org/test-prep/sat/x0a8c2e5f:untitled-652/x0a8c2e5f:passport-to-advanced-math-lessons-by-skill/a/gtp--sat-math--article--radicals-and-rational-exponents--lesson',
//     example: 'https://images.app.goo.gl/sj1J5yKQvikrUEir9',
//     video: 'https://www.youtube.com/watch?v=fvUyjBpinv8'
//     }]

//     module.exports = {
//         courses,
//         algebraOneTopics,
//         algebraTwoTopics,
//         geometryTopics,
//         precalculusTopics,
//         calculusTopics,
//         apCalculusTopics,
//         statisticsTopics,
//         apStatisticsTopics,
//         amdmTopics,
//         algebraOneLessons
//     }