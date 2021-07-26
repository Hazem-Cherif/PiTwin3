const router = require('express').Router()
const panierCtrl = require('../controllers/panierCtrl')
const auth = require('../middleware/auth')

router.post('/', panierCtrl.addCourse );
router.get('/panierCoursebyuser', auth, panierCtrl.getAllCoursesByUser);
router.delete('/delete/:id', panierCtrl.deleteCourse);

module.exports = router