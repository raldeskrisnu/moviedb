const bcrypt = require('bcrypt');
const knex = require('../../database/dbconn');
const decode = require('./token');

function createUser(req){
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(req.body.password, salt);
    let username = req.body.username;
    
    return knex('users').insert({
        username: username,
        password: hash
    }).returning('*');
}

function getUser(username) {
    return knex('users').where({ username }).first();
}

function authenticateToken(req, res, next) {
    
    if (!(req.headers && req.headers.authorization)) {
        return res.status(200).json({
            status: 'Unauthorizaion'
        });
    }

     // decode the token
    const header = req.headers.authorization.split(' ');
    const token = header[1];

    decode.decodeToken(token, (err, payload) => {
        if (err) {
            return res.status(401).json({
                status: 'Token has expired'
            });
        } else {
            return knex('users').where({ id: parseInt(payload.sub) }).first()
                .then((user) => {
                    next();
                })
                .catch((err) => {
                    res.status(500).json({
                        status: 'error'
                    });
                });
        }
    });
}
module.exports = {
    createUser,
    authenticateToken,
    getUser
};