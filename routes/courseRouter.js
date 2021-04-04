const router = require('express').Router()
const courseCtrl = require('../controllers/courseCtrl')
const auth = require('../middleware/auth')

router.post('/',auth, courseCtrl.addCourse );
router.get('/', courseCtrl.getAllCourses);
router.get('/coursebyuser', auth, courseCtrl.getAllCoursesByUser);
router.patch('/updateCourse/:id',  courseCtrl.updateCourse);
router.delete('/delete/:id', courseCtrl.deleteCourse);




module.exports = router