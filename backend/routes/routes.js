const express = require('express')
const router = express.Router()

var users = require('../controllers/userController')
var images = require('../controllers/imageController')

router.post('/login', users.login)

router.post('/register', users.register)

router.get('/userProfile', users.userProfile)

router.post('/userProfile', users.updateUserProfile)

router.get('/images', images.getAllImages)

router.post('/images', images.postImage)

router.post('/favImageIdUserId', images.favImageIdUserId)

router.post('/unfavImageIdUserId', images.unfavImageIdUserId)

router.get('/userfavImages', users.userfavImages)

module.exports = router
