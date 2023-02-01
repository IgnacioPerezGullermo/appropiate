import { Sequelize } from 'sequelize-typescript';
import { Appointment } from 'src/appointment/entities/appointment.entity';
import { Broker } from 'src/brokers/entities/broker.entity';
import { Client } from 'src/clients/entities/client.entity';
import { User } from '../users/entities/user.entity';
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
      sequelize.addModels([Broker, Client, Appointment, User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
