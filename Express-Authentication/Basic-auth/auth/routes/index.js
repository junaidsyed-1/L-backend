var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/profile', function (req, res) {
  res.render('profile');
})

module.exports = router;
