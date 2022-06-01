module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 9010),
      database: env('DATABASE_NAME', 'cms-tecooli'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'Dani020194'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
