const express = require('express');
const app = express();
const token = require('../server/auth/token');
const helper = require('../server/auth/helper');

app.post('/regis', function(req, res, next) {
    return helper.createUser(req, res)
        .then((user) => { 
            return token.encodeToken(user[0]);
        })
        .then((token) => {
            res.status(200).json({
                status: 'success',
                token: token
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                status: err
            });
        });
});

app.get('/user', helper.authenticateToken, function (req, res, next) {
    res.status(200).json({
        status: 'success'
    });
});

module.exports = app;