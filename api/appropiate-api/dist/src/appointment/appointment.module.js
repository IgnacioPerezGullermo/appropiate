"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentModule = void 0;
const common_1 = require("@nestjs/common");
const appointment_service_1 = require("./appointment.service");
const appointment_controller_1 = require("./appointment.controller");
const database_module_1 = require("../database/database.module");
const appointment_provider_1 = require("./appointment.provider");
let AppointmentModule = class AppointmentModule {
};
AppointmentModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        providers: [appointment_service_1.AppointmentService, ...appointment_provider_1.AppointmentProviders],
        controllers: [appointment_controller_1.AppointmentController],
        exports: [appointment_service_1.AppointmentService],
    })
], AppointmentModule);
exports.AppointmentModule = AppointmentModule;
//# sourceMappingURL=appointment.module.js.map