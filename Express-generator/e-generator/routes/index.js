var express = require('express');
var router = express.Router();
const userModel = require('./users');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/create', async function (req, res) {
  const user = await userModel.create({
    username: "Junaid syed",
    desription: 'He is a software engineer and he is very good at it and he is also a very religious person.',
    categories: ['Namaz', 'Quran', 'Respect parents', 'Be good for no reason', 'react', 'node js', 'javascript', 'tailwind', 'express']

  });
  res.send('User has been created with username as ' + user.username + ', You can check on /check');
});

router.get('/check', async function (req, res) {
  const regex = new RegExp('^junaid$', 'i')
  const user = await userModel.find({ username: regex });
  if (user) {
    res.send(user);
  } else { res.send('User not found') };
});

module.exports = router;
