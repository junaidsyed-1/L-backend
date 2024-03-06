var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.status(200).json({ message: 'Welcome' });
});

router.get('/home', function (req, res) {
    res.status(200).json({ message: 'This is home' })
})


module.exports = router;
