"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_broker_dto_1 = require("../brokers/dto/create-broker.dto");
const create_user_dto_1 = require("../clients/dto/create-user.dto");
const admin_entity_1 = require("../clients/entities/admin.entity");
const auth_service_1 = require("./auth.service");
const local_auth_guard_1 = require("./local-auth.guard");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async loginClient(req) {
        console.log(req.user);
        return await this.authService.loginClient(req.user);
    }
    async signupClient(user) {
        return await this.authService.createClient(user);
    }
    async loginAdmin(admin) {
        return await this.authService.loginAdmin(admin);
    }
    async loginBroker(req) {
        console.log(req);
        return await this.authService.loginBroker(req.user);
    }
    async signupBroker(broker) {
        return await this.authService.createBroker(broker);
    }
};
__decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, common_1.Post)('clients/login'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "loginClient", null);
__decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, common_1.Post)('clients/signup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signupClient", null);
__decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, common_1.Post)('admin/login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_entity_1.Admin]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "loginAdmin", null);
__decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, common_1.Post)('broker/login'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "loginBroker", null);
__decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, common_1.Post)('broker/signup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_broker_dto_1.CreateBrokerDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signupBroker", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map