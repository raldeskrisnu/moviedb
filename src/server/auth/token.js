const moment = require('moment');
const jwt = require('jwt-simple');

function encodeToken(users) {
    const payload = {
        exp: Moment().add(14, 'days').unix(),
        iat: Moment().unix(),
        sub: users.id
    };

    return Jwt.encode(payload, process.env.TOKEN_SECRET);
}

function decodeToken(token, callback){
    const payload = jwt.decode(token, process.env.TOKEN_SECRET);
    const now = Moment.unix();
    if (now > payload.exp) callback('Token has expired.');
    else callback(null, payload);
}

module.exports = {
    encodeToken,
    decodeToken
};