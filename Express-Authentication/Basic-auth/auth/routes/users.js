var express = require('express');
var router = express.Router();
const userModel = require('../models/user');
const { v4: uuidv4 } = require('uuid');
const isUserLoggedIn = require('../middleware/auth')

// register a user
router.post('/register', async function (req, res) {
  try {
    const user = await userModel.create({
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
    });
    const sessionId = uuidv4();
    if (user) {
      res.cookie("session", sessionId)
      res.redirect('/profile');
    } else res.redirect('/');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/login', isUserLoggedIn, async function (req, res) {
  try {

    if (!req.body.email || !req.body.password) {
      return res.redirect('/');
    }

    const user = await userModel.find({
      email: req.body.email,
      password: req.body.password
    });

    const sessionId = uuidv4();

    if (user) {
      res.cookie("session", sessionId)
      res.redirect('/profile');
    } else res.redirect('/');

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/logout', function (req, res) {
  res.clearCookie('session');
  res.redirect('/')
});

module.exports = router;
