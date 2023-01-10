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
exports.BrokersService = void 0;
const common_1 = require("@nestjs/common");
const appointment_entity_1 = require("../appointment/entities/appointment.entity");
const constants_1 = require("../../core/constants");
const broker_entity_1 = require("./entities/broker.entity");
let BrokersService = class BrokersService {
    constructor(brokerRepository) {
        this.brokerRepository = brokerRepository;
    }
    async create(CreateBrokerDto) {
        try {
            const broker = new broker_entity_1.Broker();
            broker.name = CreateBrokerDto.name;
            broker.email = CreateBrokerDto.email.trim().toLowerCase();
            broker.password = CreateBrokerDto.password;
            broker.type = CreateBrokerDto.type;
            broker.tel = CreateBrokerDto.tel;
            const brokerData = await broker.save();
            console.log(brokerData);
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
        return await this.brokerRepository.findAll({
            include: [
                {
                    model: appointment_entity_1.Appointment,
                },
            ],
        });
    }
    async findOne(id) {
        return await this.brokerRepository.findOne({
            where: { id },
            include: [
                {
                    model: appointment_entity_1.Appointment,
                },
            ],
        });
    }
    async update(id, updateBrokerDto) {
        const broker = await this.brokerRepository.findByPk(id);
        if (!broker) {
            throw new common_1.BadRequestException(`User does not exist in db `);
        }
        broker.name = updateBrokerDto.name || broker.name;
        broker.email = updateBrokerDto.email || broker.email;
        broker.tel = updateBrokerDto.tel || broker.tel;
        broker.type = updateBrokerDto.type || broker.type;
        try {
            const data = await broker.save();
        }
        catch (err) {
            throw new common_1.InternalServerErrorException(`Can't update User - check server logs`);
        }
    }
    remove(id) {
        return `This action removes a #${id} broker`;
    }
};
BrokersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.BROKER_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], BrokersService);
exports.BrokersService = BrokersService;
//# sourceMappingURL=brokers.service.js.map