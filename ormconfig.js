module.exports = {
  type: process.env.TYPEORM_TYPE,
  url: process.env.DATABASE_URL,
  synchronize: process.env.TYPEORM_SYNCHRONIZE,
  logging: process.env.TYPEORM_LOGGING,
  entities: [process.env.TYPEORM_ENTITIES],
  migrations: [process.env.TYPEORM_MIGRATIONS],
  subscribers: [process.env.TYPEORM_SUBSCRIBERS],
  cli: {
    entitiesDir: process.env.TYPEORM_ENTITIES_CLI,
    migrationsDir: process.env.TYPEORM_MIGRATIONS_CLI,
    subscribersDir: process.env.TYPEORM_SUBSCRIBERS_CLI,
  },
};
