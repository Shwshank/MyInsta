const express = require('express')
const router = express.Router()

var users = require('../controllers/userController')

router.post('/login', users.login)

router.post('/register', users.register)

router.get('/userProfile', users.userProfile)

router.post('/userProfile', users.updateUserProfile)

module.exports = router
