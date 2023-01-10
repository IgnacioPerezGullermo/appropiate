"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentProviders = void 0;
const constants_1 = require("../../core/constants");
const appointment_entity_1 = require("./entities/appointment.entity");
exports.AppointmentProviders = [
    {
        provide: constants_1.APPOINTMENT_REPOSITORY,
        useValue: appointment_entity_1.Appointment,
    },
];
//# sourceMappingURL=appointment.provider.js.map