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
    constructor(clientRepository) {
        this.clientRepository = clientRepository;
    }
    async create(createClientDto) {
        try {
            const client = new client_entity_1.Client();
            client.username = createClientDto.username;
            client.email = createClientDto.email;
            client.password = createClientDto.password;
            const clientData = await client.save();
            return clientData;
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
        return await this.clientRepository.findAll({
            include: [
                {
                    model: appointment_entity_1.Appointment,
                },
            ],
        });
    }
    async findById(id) {
        return await this.clientRepository.findOne({
            where: { id },
            include: [
                {
                    model: appointment_entity_1.Appointment,
                },
            ],
        });
    }
    async findOneByUsername(username) {
        return await this.clientRepository.findOne({ where: { username } });
    }
    async update(id, updateClientDto) {
        const client = await this.clientRepository.findByPk(id);
        if (!client) {
            throw new common_1.BadRequestException(`User does not exist in db `);
        }
        client.username = updateClientDto.username || client.username;
        client.email = updateClientDto.email || client.email;
        try {
            const data = await client.save();
        }
        catch (err) {
            throw new common_1.InternalServerErrorException(`Can't update Client - check server logs`);
        }
    }
    remove(id) {
        return `This action removes a #${id} client`;
    }
};
ClientsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.CLIENTS_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], ClientsService);
exports.ClientsService = ClientsService;
//# sourceMappingURL=clients.service.js.map