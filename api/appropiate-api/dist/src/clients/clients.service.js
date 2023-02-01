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
exports.ClientsService = void 0;
const common_1 = require("@nestjs/common");
const appointment_entity_1 = require("../appointment/entities/appointment.entity");
const constants_1 = require("../../core/constants");
const client_entity_1 = require("./entities/client.entity");
let ClientsService = class ClientsService {
    constructor(clientsRepository) {
        this.clientsRepository = clientsRepository;
    }
    async create(createClientDto) {
        try {
            const user = new client_entity_1.Client();
            user.firstName = createClientDto.firstName;
            user.lastName = createClientDto.lastName;
            user.ageRange = createClientDto.ageRange;
            user.profilePicture = createClientDto.profilePicture;
            user.userId = createClientDto.userId;
            const userData = await user.save();
            return userData;
        }
        catch (error) {
            console.log(error);
            if (error.code === 11000) {
                throw new common_1.BadRequestException(`Client exist in db ${JSON.stringify(error.keyValue)}`);
            }
            console.log(error);
            throw new common_1.InternalServerErrorException(`Can't create Client - check server logs`);
        }
    }
    async findAll() {
        return await this.clientsRepository.findAll();
    }
    async findByType(type) {
        return await this.clientsRepository.findAll({
            where: { type },
            include: [
                {
                    model: appointment_entity_1.Appointment,
                },
            ],
        });
    }
    async findById(id) {
        return await this.clientsRepository.findOne({
            where: { id },
            include: [
                {
                    model: appointment_entity_1.Appointment,
                },
            ],
        });
    }
    async findOneByUsername(username) {
        return await this.clientsRepository.findOne({
            where: { username },
        });
    }
    async update(id, updateClientDto) {
        const user = await this.clientsRepository.findByPk(id);
        if (!user) {
            throw new common_1.BadRequestException(`User does not exist in db `);
        }
        user.firstName = updateClientDto.firstName || user.firstName;
        user.lastName = updateClientDto.lastName || user.lastName;
        user.ageRange = updateClientDto.ageRange || user.ageRange;
        user.basicIncome = updateClientDto.basicIncome || user.basicIncome;
        user.profilePicture = updateClientDto.profilePicture || user.profilePicture;
        try {
            const data = await user.save();
        }
        catch (err) {
            throw new common_1.InternalServerErrorException(`Can't update Client - check server logs`);
        }
    }
    async remove(id) {
        return await this.clientsRepository.destroy({ where: { id } });
    }
};
ClientsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.CLIENT_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], ClientsService);
exports.ClientsService = ClientsService;
//# sourceMappingURL=clients.service.js.map