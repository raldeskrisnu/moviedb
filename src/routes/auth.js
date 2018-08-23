const express = require('express');
const app = express();
const token = require('../server/auth/token').default;
const helper = require('../server/auth/helper');

app.post('/regis', (req, res, next) => {
    return helper.createUser(req, res)
        .then((user) => { return token.encodeToken(user[0]); })
        .then((token) => {
            res.status(200).json({
                status: 'success',
                token: token
            });
        })
        .catch((err) => {
            res.status(500).json({
                status: 'error'
            });
        });
});

module.exports = app;