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
exports.AppointmentService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../core/constants");
const broker_entity_1 = require("../brokers/entities/broker.entity");
const client_entity_1 = require("../clients/entities/client.entity");
const appointment_entity_1 = require("./entities/appointment.entity");
let AppointmentService = class AppointmentService {
    constructor(appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }
    async create(createAppointmentDto) {
        try {
            const appointment = new appointment_entity_1.Appointment();
            appointment.title = createAppointmentDto.title;
            appointment.date = createAppointmentDto.date;
            appointment.brokerId = createAppointmentDto.brokerId;
            appointment.clientId = createAppointmentDto.clientId;
            appointment.type = createAppointmentDto.type;
            const appointmenteData = await appointment.save();
            console.log(appointmenteData);
        }
        catch (error) {
            console.log(error);
            if (error.code === 11000) {
                throw new common_1.BadRequestException(`User exist in db ${JSON.stringify(error.keyValue)}`);
            }
            console.log(error);
            throw new common_1.InternalServerErrorException(`Can't create User - check server logs`);
        }
    }
    async findAll() {
        return await this.appointmentRepository.findAll({
            include: [
                {
                    model: client_entity_1.Client,
                    attributes: { exclude: ['password'] },
                },
                {
                    model: broker_entity_1.Broker,
                    attributes: { exclude: ['password'] },
                },
            ],
        });
    }
    async findOne(id) {
        return await this.appointmentRepository.findOne({
            where: { id },
            include: [
                {
                    model: client_entity_1.Client,
                    attributes: { exclude: ['password'] },
                },
                {
                    model: broker_entity_1.Broker,
                    attributes: { exclude: ['password'] },
                },
            ],
        });
    }
    update(id, updateAppointmentDto) {
        return `This action updates a #${id} appointment`;
    }
    remove(id) {
        return `This action removes a #${id} appointment`;
    }
};
AppointmentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.APPOINTMENT_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], AppointmentService);
exports.AppointmentService = AppointmentService;
//# sourceMappingURL=appointment.service.js.map