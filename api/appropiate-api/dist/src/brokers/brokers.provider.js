"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrokerProviders = void 0;
const broker_entity_1 = require("./entities/broker.entity");
const constants_1 = require("../../core/constants");
exports.BrokerProviders = [
    {
        provide: constants_1.BROKER_REPOSITORY,
        useValue: broker_entity_1.Broker,
    },
];
//# sourceMappingURL=brokers.provider.js.map