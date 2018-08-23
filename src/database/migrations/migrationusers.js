exports.up = (knex, Promise) => {
    return knex.schema.createTablekn('users', (table) => {
      table.increments('id').primary().unsigned();
      table.string('username').unique().notNullable();
      table.string('password');
      table.timestamp('created_at').defaultTo(knex.raw('now()'));
    });
  };
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('users');
  };
  