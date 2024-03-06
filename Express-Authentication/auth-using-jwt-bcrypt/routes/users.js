var express = require('express');
const { signup, signin } = require('../controllers/userController');
var router = express.Router();


router.post('/signup', signup);

router.post('/signin', signin);


module.exports = router;