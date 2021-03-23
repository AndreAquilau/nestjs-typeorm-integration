import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: (process.env.TYPEORM_TYPE as 'postgres') || 'postgres',
        url: process.env.DATABASE_URL,
        entities: [__dirname + '../entity/**/*.entity{.ts,.js}'],
        migrations: [__dirname + '../migration/**/*{.ts,.js}'],
        subscribers: [__dirname + '../subscriber/**/*{.ts,.js}'],
      }),
  },
];
