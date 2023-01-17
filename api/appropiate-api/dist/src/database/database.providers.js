"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const appointment_entity_1 = require("../appointment/entities/appointment.entity");
const broker_entity_1 = require("../brokers/entities/broker.entity");
const user_entity_1 = require("../clients/entities/user.entity");
exports.databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new sequelize_typescript_1.Sequelize({
                dialect: 'postgres',
                host: 'localhost',
                port: 5433,
                username: 'nacho',
                password: 'nacho',
                database: 'my_db',
            });
            sequelize.addModels([broker_entity_1.Broker, user_entity_1.User, appointment_entity_1.Appointment]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
//# sourceMappingURL=database.providers.js.map