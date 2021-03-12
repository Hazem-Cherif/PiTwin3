const router = require('express').Router()
const userCtrl = require('../controllors/userCtrl')
router.post('/register',userCtrl.register)
module.exports= router