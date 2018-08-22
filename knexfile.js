const env = require('dotenv').config({path: '.env'});

module.exports = {
    development: {
        client: 'postgresql',
        connection: `postgres://localhost:5432/${process.env.DATABASE_NAME}`,
        migrations: {
            directory: __dirname + '/src/database/migrations'
        },
        seeds: {
            directory: __dirname + '/src/database/seeds'
        }
    },
    test: {
        client: 'postgresql',
        connection: `postgres://localhost:5432/${process.env.DATABASE_NAME}_test`,
        migrations: {
            directory: __dirname + '/src/database/migrations'
        },
        seeds: {
            directory: __dirname + '/src/database/seeds'
        }
    }
};