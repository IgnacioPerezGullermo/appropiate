"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsService = void 0;
const common_1 = require("@nestjs/common");
let ClientsService = class ClientsService {
    create(createClientDto) {
        return 'This action adds a new client';
    }
    findAll() {
        return `This action returns all clients`;
    }
    findOne(id) {
        return `This action returns a #${id} client`;
    }
    update(id, updateClientDto) {
        return `This action updates a #${id} client`;
    }
    remove(id) {
        return `This action removes a #${id} client`;
    }
};
ClientsService = __decorate([
    (0, common_1.Injectable)()
], ClientsService);
exports.ClientsService = ClientsService;
//# sourceMappingURL=clients.service.js.map