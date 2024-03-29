import { Sequelize } from 'sequelize-typescript';
import { Appointment } from 'src/appointment/entities/appointment.entity';
import { Broker } from 'src/brokers/entities/broker.entity';
import { Client } from 'src/clients/entities/client.entity';
import { Images } from 'src/propierties/entities/images.entity';
import { Propierty } from '../propierties/entities/propierty.entity';
import { User } from '../users/entities/user.entity';

export function extractStringEnvVar(key: keyof NodeJS.ProcessEnv): string {
  const value = process.env[key];

  if (value === undefined) {
    const message = `The environment variable "${key}" cannot be "undefined".`;

    throw new Error(message);
  }

  return value;
}

export function extractNumberEnvVar(key: keyof NodeJS.ProcessEnv): number {
  const stringValue = extractStringEnvVar(key);

  const numberValue = parseFloat(stringValue);

  if (Number.isNaN(numberValue)) {
    const message = `The environment variable "${key}" has to hold a stringified number value - not ${stringValue}`;

    throw new Error(message);
  }

  return numberValue;
}

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      if (process.env.NODE_ENV === 'production node dist/src/main') {
        const sequelize = new Sequelize({
          dialect: 'postgres',
          host: process.env.DB_HOST,
          port: Number(process.env.DB_PORT), // $ExpectType number,
          username: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
          dialectOptions: {
            ssl: {
              require: true, // This will help you. But you will see nwe error
              rejectUnauthorized: false, // This line will fix new error
            },
          },
        });
        sequelize.addModels([
          Broker,
          Client,
          Appointment,
          User,
          Propierty,
          Images,
        ]);
        await sequelize.sync();
        return sequelize;
      } else {
        const sequelize = new Sequelize({
          dialect: 'postgres',
          host: process.env.DB_HOST,
          port: Number(process.env.DB_PORT), // $ExpectType number,
          username: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
          // dialectOptions: {
          //   ssl: {
          //     require: true, // This will help you. But you will see nwe error
          //     rejectUnauthorized: false, // This line will fix new error
          //   },
          // },
        });
        sequelize.addModels([
          Broker,
          Client,
          Appointment,
          User,
          Propierty,
          Images,
        ]);
        await sequelize.sync();
        return sequelize;
      }
    },
  },
];
