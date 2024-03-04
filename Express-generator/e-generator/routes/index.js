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

// 1. How to perform case-insensitive search in mongoose?
// router.get('/check', async function (req, res) {
//   const regex = new RegExp('^junaid$', 'i')
//   const user = await userModel.find({ username: regex });
//   if (user) {
//     res.send(user);
//   } else { res.send('User not found') };
// });

// 2. How to find documents where an array field contain all of a set of values?
// router.get('/check', async function (req, res) {
//   const user = await userModel.find({ categories: { $all: ['react',] } });
//   res.send(user);
// });

// 3. How to search a document with a specific date range?
// router.get('/check', async function (req, res) {
//   const date1 = new Date('2024-03-03')
//   const date2 = new Date('2024-03-05')
//   const user = await userModel.find({ date: { $gte: date1, $lte: date2 } });
//   res.send(user);
// });

// 4. How to filter documents based on a existence of field in mongoose?
// router.get('/check', async function (req, res) {
//   const user = await userModel.find({ categories: { $exists: true } });
//   res.send(user);
// });

// 5. How to filter documents based on a specific fields length in mongoose?
router.get('/check', async function (req, res) {
  const user = await userModel.find({
    $expr: {
      $and: [
        { $gte: [{ $strLenCP: '$username' }, 0] },
        { $lte: [{ $strLenCP: '$username' }, 6] }
      ]
    }
  });
  res.send(user);
})

module.exports = router;
