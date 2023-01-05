"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientProviders = void 0;
const client_entity_1 = require("./entities/client.entity");
exports.clientProviders = [
    {
        provide: 'CLIENTS_REPOSITORY',
        useValue: client_entity_1.Client,
    },
];
//# sourceMappingURL=clients.providers.js.map