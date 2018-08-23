const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync();
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
        const hash = bcrypt.hashSync('raldes', salt);
      // Inserts seed entries
      return knex('users').insert([
        {
            username: 'Raldes',
            application_name: 'movieDbAndroidNative',
            password:hash
        }
      ]);
    });
};