var express = require('express');
const { signup, signin } = require('../controllers/userController');
const auth = require('../middleware/auth');
var router = express.Router();


router.post('/signup', signup);

router.post('/signin', signin);

router.get('/profile', auth, function (req, res) {
    res.send('Protected Route');
})

module.exports = router;