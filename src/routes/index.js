const express = require('express');
const app = express();

app.get('/index', function (req, res, next) {
    res.status(200).send("index");
});

module.exports = app;