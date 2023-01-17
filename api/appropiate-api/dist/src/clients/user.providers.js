"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProviders = void 0;
const constants_1 = require("../../core/constants");
const user_entity_1 = require("./entities/user.entity");
exports.userProviders = [
    {
        provide: constants_1.USER_REPOSITORY,
        useValue: user_entity_1.User,
    },
];
//# sourceMappingURL=user.providers.js.map