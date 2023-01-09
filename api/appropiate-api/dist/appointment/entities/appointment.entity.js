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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Appointment = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const broker_entity_1 = require("../../brokers/entities/broker.entity");
let Appointment = class Appointment extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Appointment.prototype, "title", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Appointment.prototype, "date", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => broker_entity_1.Broker),
    __metadata("design:type", Array)
], Appointment.prototype, "broker", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Appointment.prototype, "client", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Appointment.prototype, "type", void 0);
Appointment = __decorate([
    sequelize_typescript_1.Table
], Appointment);
exports.Appointment = Appointment;
//# sourceMappingURL=appointment.entity.js.map