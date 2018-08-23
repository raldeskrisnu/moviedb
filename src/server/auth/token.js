const moment = require('moment');
const jwt = require('jwt-simple');

function encodeToken(users) {
    const payload = {
        exp: moment().add(14, 'days').unix(),
        iat: moment().unix(),
        sub: users.id
    };

    return jwt.encode(payload, process.env.TOKEN_SECRET);
}

function decodeToken(token, callback){
    const payload = jwt.decode(token, process.env.TOKEN_SECRET);
    const now = moment.unix();
    if (now > payload.exp) callback('Token has expired.');
    else callback(null, payload);
}

module.exports = {
    encodeToken,
    decodeToken
};