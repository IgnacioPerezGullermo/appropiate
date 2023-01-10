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
exports.BrokersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const brokers_service_1 = require("./brokers.service");
const create_broker_dto_1 = require("./dto/create-broker.dto");
const update_broker_dto_1 = require("./dto/update-broker.dto");
let BrokersController = class BrokersController {
    constructor(brokersService) {
        this.brokersService = brokersService;
    }
    create(createBrokerDto) {
        return this.brokersService.create(createBrokerDto);
    }
    findAll() {
        return this.brokersService.findAll();
    }
    findOne(id) {
        return this.brokersService.findOne(id);
    }
    update(id, updateBrokerDto) {
        return this.brokersService.update(id, updateBrokerDto);
    }
    remove(id) {
        return this.brokersService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_broker_dto_1.CreateBrokerDto]),
    __metadata("design:returntype", void 0)
], BrokersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BrokersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BrokersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_broker_dto_1.UpdateBrokerDto]),
    __metadata("design:returntype", void 0)
], BrokersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BrokersController.prototype, "remove", null);
BrokersController = __decorate([
    (0, swagger_1.ApiTags)('Brokers'),
    (0, common_1.Controller)('brokers'),
    __metadata("design:paramtypes", [brokers_service_1.BrokersService])
], BrokersController);
exports.BrokersController = BrokersController;
//# sourceMappingURL=brokers.controller.js.map