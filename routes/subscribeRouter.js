const router = require('express').Router()

const subcribeCtrl = require('../controllers/subscribeCtrl');
const auth = require('../middleware/auth')


router.get('/SubscribedCoursebyuser', auth, subcribeCtrl.addSubscribe);
router.get('/Subscribed', auth, subcribeCtrl.getAllSubscribe);
router.delete('/delete/:id', subcribeCtrl.deleteSubscribe);

module.exports = router