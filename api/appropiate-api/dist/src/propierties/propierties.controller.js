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
exports.PropiertiesController = void 0;
const common_1 = require("@nestjs/common");
const propierties_service_1 = require("./propierties.service");
const create_propierty_dto_1 = require("./dto/create-propierty.dto");
const update_propierty_dto_1 = require("./dto/update-propierty.dto");
const swagger_1 = require("@nestjs/swagger");
let PropiertiesController = class PropiertiesController {
    constructor(propiertiesService) {
        this.propiertiesService = propiertiesService;
    }
    create(createPropiertyDto) {
        return this.propiertiesService.create(createPropiertyDto);
    }
    findAll() {
        return this.propiertiesService.findAll();
    }
    findOne(id) {
        return this.propiertiesService.findOne(+id);
    }
    update(id, updatePropiertyDto) {
        return this.propiertiesService.update(+id, updatePropiertyDto);
    }
    remove(id) {
        return this.propiertiesService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_propierty_dto_1.CreatePropiertyDto]),
    __metadata("design:returntype", void 0)
], PropiertiesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PropiertiesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PropiertiesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_propierty_dto_1.UpdatePropiertyDto]),
    __metadata("design:returntype", void 0)
], PropiertiesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PropiertiesController.prototype, "remove", null);
PropiertiesController = __decorate([
    (0, swagger_1.ApiTags)('Propierties'),
    (0, common_1.Controller)('propierties'),
    __metadata("design:paramtypes", [propierties_service_1.PropiertiesService])
], PropiertiesController);
exports.PropiertiesController = PropiertiesController;
//# sourceMappingURL=propierties.controller.js.map