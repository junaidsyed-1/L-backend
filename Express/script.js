const express = require('express')
const app = express();
const port = 3000;

// lets use a middleware
app.use((req, res, next) => {
    console.log("Hello from middleware")
    next();
})

app.get('/', function (req, res) {
    res.send("Hello backend");
});

app.get('/profile', function (req, res) {
    res.send("<h1>Hello from profile</h1>");
});

app.listen(port, () => {
    console.log("App listening on port: " + port);
});
