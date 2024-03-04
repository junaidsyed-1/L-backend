var express = require('express');
var router = express.Router();
const userModel = require('./users');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// How to set a cookie
router.get('/cookie', function (req, res) {
  res.cookie("Name", "Junad");
  res.send("Cookie has been set!");
});

// How to read cookie
router.get('/read', function (req, res) {
  if (req.cookies.Name) res.send(req.cookies)
  else res.send("No cookies found")
});

// How to delete a cookie
router.get('/delete', function (req, res) {
  res.clearCookie("Name");
  res.send("Cookie cleared");
});

module.exports = router;
