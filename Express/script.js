const express = require('express');
const app = express();
const port = 3000;

// lets use a middleware
app.use((req, res, next) => {
    console.log("Hello from middleware")
    next();
});

// ejs
app.set("view engine", "ejs");

app.get('/', function (req, res) {
    res.render("index");
});

app.get('/profile', function (req, res) {
    res.send("<h1>Hello from profile</h1>");
});

// Let's do dynamic routing:
app.get('/profile/:user', function (req, res) {
    console.log(req.params)
    res.send(`<h1>Hello ${req.params.user}</h1>`)
})

app.listen(port, () => {
    console.log("App listening on port: " + port);
});
