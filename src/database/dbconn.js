const environment = process.env.NODE_DEVELOPMENT;
const config = require('../../knexfile')[environment];
module.exports = require('knex')(config);