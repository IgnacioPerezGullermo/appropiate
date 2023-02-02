import { Sequelize } from 'sequelize-typescript';
import { Appointment } from 'src/appointment/entities/appointment.entity';
import { Broker } from 'src/brokers/entities/broker.entity';
import { User } from '../clients/entities/user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: 5432,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      });
      sequelize.addModels([Broker, User, Appointment]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
