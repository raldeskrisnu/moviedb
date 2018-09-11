const environment = process.env.NODE_DEVELOPMENT || 'development';
const config = require('../../knexfile')[environment];
module.exports = require('knex')(config);