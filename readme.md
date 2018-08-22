//knex create migration template file
knex migrate:make name_templatefile

//knex create seed template
knex seed:make users

//Knex command for migrate
knex migrate:latest

//knex seed database
knex seed:run