// Update with your config settings.

module.exports = {
  
    client: 'pg',
    connection: {
      database: 'graphql',
      user:     'postgres',
      password: 'postgresdocker'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }

};
