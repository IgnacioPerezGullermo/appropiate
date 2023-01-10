"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const clients_controller_1 = require("./clients.controller");
const clients_providers_1 = require("./clients.providers");
const clients_service_1 = require("./clients.service");
let ClientsModule = class ClientsModule {
};
ClientsModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        providers: [clients_service_1.ClientsService, ...clients_providers_1.clientProviders],
        controllers: [clients_controller_1.ClientsController],
        exports: [clients_service_1.ClientsService],
    })
], ClientsModule);
exports.ClientsModule = ClientsModule;
//# sourceMappingURL=clients.module.js.map