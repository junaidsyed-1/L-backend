const express = require('express');
const connectToMongoDb = require('./config/database');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const app = express();
const port = 3000;

connectToMongoDb();

app.use(express.json());

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log('listening on port' + port);
});

module.exports = app;