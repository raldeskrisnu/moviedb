module.exports = {
    development: {
        client: 'postgresql',
        connection: `{${process.env.DATABASE_URL}}`,
        migrations: {
            directory: __dirname + '/src/database/migrations'
        },
        seeds: {
            directory: __dirname + '/src/database/seeds'
        }
    },
    production: {
        client: 'postgresql',
        connection: `{${process.env.DATABASE_URL}}`,
        migrations: {
            directory: __dirname + '/src/database/migrations'
        },
        seeds: {
            directory: __dirname + '/src/database/seeds'
        }
    }
};