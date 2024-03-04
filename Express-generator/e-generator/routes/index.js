var express = require('express');
var router = express.Router();
const userModel = require('./users');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// How to create a session
router.get('/create', function (req, res) {
  req.session.ban = true;
  res.send("Banned");
});

// How to read session
router.get('/read', function (req, res) {
  if (req.session.ban === true) {
    res.send("You are banned");
  } else {
    res.send("You are not banned");
  }
});

// How to delete a session
router.get('/delete', function (req, res) {
  req.session.destroy(function (err) {
    if (err) throw err;
    res.send("Ban removed")
  })
})

module.exports = router;
