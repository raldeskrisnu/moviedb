import Moment from 'moment';
import Jwt from 'jwt-simple';

function encodeToken(users) {
    const payload = {
        exp: Moment().add(14, 'days').unix(),
        iat: Moment().unix(),
        sub: users.id
    };

    return Jwt.encode(payload, process.env.TOKEN_SECRET)
}

module.exports = {
    encodeToken
};