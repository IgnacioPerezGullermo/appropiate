import { Sequelize } from 'sequelize-typescript';
import { Client } from '../clients/entities/client.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'LB20071997',
        database: 'appropiatedb',
      });
      sequelize.addModels([Client]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
