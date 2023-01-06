import { Sequelize } from 'sequelize-typescript';
import { Client } from '../clients/entities/client.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5433,
        username: 'nacho',
        password: 'nacho',
        database: 'my_db',
      });
      sequelize.addModels([Client]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
