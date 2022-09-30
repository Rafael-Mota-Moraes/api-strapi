module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'babar.db.elephantsql.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'ftahaauf'),
      user: env('DATABASE_USERNAME', 'ftahaauf'),
      password: env('DATABASE_PASSWORD', 'YbisOh9CX2IaCyTRsF0qpYaVNSsCO4vj'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
