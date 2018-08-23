const bcrypt = require('bcrypt');
const knex = require('../../database/dbconn');

function createUser(req){
    console.log(req.body.password);
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(req.body.password, salt);
    console.log(hash);
    return knex('users').insert({
        username: req.body.username,
        password: hash
    }).returning('*');
}

module.exports = {
    createUser
};