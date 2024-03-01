const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('./public'))

// ejs
app.set("view engine", "ejs");

// Error
app.get('/error', function (req, res) {
    throw new Error("Something went wrong")
})

app.get('/', function (req, res, next) {
    res.render("index");
});

app.get('/profile', function (req, res) {
    res.send("<h1>Hello from profile</h1>");
});

// Let's do dynamic routing:
app.get('/profile/:user', function (req, res) {
    console.log(req.params)
    res.send(`<h1>Hello ${req.params.user}</h1>`)
});

// Error handling page
app.use(function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
});

app.listen(port, () => {
    console.log("App listening on port: " + port);
});
