var express = require('express');
var router = express.Router();
const userModel = require('./users');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// Basic: create a user;
router.get('/create', async function (req, res) {
  const user = await userModel.create({
    username: "Punihser",
    age: 24,
    name: "Junaid",
  });
  res.send(user);
});

// Basic: find a user or findAll users;
router.get('/find', async function (req, res) {
  // find(): will find all user or if we give specific obj it will then find all user according to the input;
  // const getUser = await userModel.find();

  // how to findOne user, it will return the first occurance it finds: suppose there are multiple user with same name then it will only return the first one if you are finding by name.
  const getUser = await userModel.findOne({ name: "Junaid" });

  res.send(getUser);
});

// How to delete a user; there are multiple mongoose APIs to delete a user. 
router.get('/delete', async function (req, res) {

  const deleteUser = await userModel.findOneAndDelete({ name: "Junaid" });
  if (!deleteUser) return null

  res.send(deleteUser);

})

module.exports = router;
