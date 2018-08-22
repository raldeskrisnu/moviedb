exports.up = (knex, Promise) => {
    return knex.schema.createTable('users', (table) => {
      table.increments();
      table.string('username').unique().notNullable();
      table.string('application_name').unique().notNullable();
      table.string('password').notNullable();
      table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    });
  };
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('users');
  };
  