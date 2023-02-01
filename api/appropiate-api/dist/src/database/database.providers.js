"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = exports.extractNumberEnvVar = exports.extractStringEnvVar = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const appointment_entity_1 = require("../appointment/entities/appointment.entity");
const broker_entity_1 = require("../brokers/entities/broker.entity");
const client_entity_1 = require("../clients/entities/client.entity");
const user_entity_1 = require("../users/entities/user.entity");
function extractStringEnvVar(key) {
    const value = process.env[key];
    if (value === undefined) {
        const message = `The environment variable "${key}" cannot be "undefined".`;
        throw new Error(message);
    }
    return value;
}
exports.extractStringEnvVar = extractStringEnvVar;
function extractNumberEnvVar(key) {
    const stringValue = extractStringEnvVar(key);
    const numberValue = parseFloat(stringValue);
    if (Number.isNaN(numberValue)) {
        const message = `The environment variable "${key}" has to hold a stringified number value - not ${stringValue}`;
        throw new Error(message);
    }
    return numberValue;
}
exports.extractNumberEnvVar = extractNumberEnvVar;
exports.databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new sequelize_typescript_1.Sequelize({
                dialect: 'postgres',
                host: process.env.DB_HOST,
                port: Number(process.env.DB_PORT),
                username: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
            });
            sequelize.addModels([broker_entity_1.Broker, client_entity_1.Client, appointment_entity_1.Appointment, user_entity_1.User]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
//# sourceMappingURL=database.providers.js.map