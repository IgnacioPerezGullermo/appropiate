"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientService = exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
let ClientService = class ClientService {
    getClients() {
        return 'Aqui mostrariamos los clientes que tenemos';
    }
    postClient() {
        return 'Aqui agregamos un usuario nuevo';
    }
    patchClient() {
        return 'Aqui cambiamos un usuario existente';
    }
    deleteClient() {
        return 'Aqui eliminamos a un usuario';
    }
};
ClientService = __decorate([
    (0, common_1.Injectable)()
], ClientService);
exports.ClientService = ClientService;
//# sourceMappingURL=app.service.js.map