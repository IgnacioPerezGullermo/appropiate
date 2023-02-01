"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientsProviders = void 0;
const constants_1 = require("../../core/constants");
const client_entity_1 = require("./entities/client.entity");
exports.clientsProviders = [
    {
        provide: constants_1.CLIENT_REPOSITORY,
        useValue: client_entity_1.Client,
    },
];
//# sourceMappingURL=clients.providers.js.map