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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const appointment_entity_1 = require("../appointment/entities/appointment.entity");
const constants_1 = require("../../core/constants");
const user_entity_1 = require("./entities/user.entity");
let UserService = class UserService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async create(createUserDto) {
        try {
            const user = new user_entity_1.User();
            user.username = createUserDto.username;
            user.email = createUserDto.email;
            user.password = createUserDto.password;
            user.type = createUserDto.type;
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
        return await this.usersRepository.findAll({
            include: [
                {
                    model: appointment_entity_1.Appointment,
                },
            ],
        });
    }
    async findByType(type) {
        return await this.usersRepository.findAll({
            where: { type },
            include: [
                {
                    model: appointment_entity_1.Appointment,
                },
            ],
        });
    }
    async findById(id) {
        return await this.usersRepository.findOne({
            where: { id },
            include: [
                {
                    model: appointment_entity_1.Appointment,
                },
            ],
        });
    }
    async findOneByUsername(username) {
        return await this.usersRepository.findOne({ where: { username } });
    }
    async update(id, updateUserDto) {
        const user = await this.usersRepository.findByPk(id);
        if (!user) {
            throw new common_1.BadRequestException(`User does not exist in db `);
        }
        user.username = updateUserDto.username || user.username;
        user.email = updateUserDto.email || user.email;
        try {
            const data = await user.save();
        }
        catch (err) {
            throw new common_1.InternalServerErrorException(`Can't update Client - check server logs`);
        }
    }
    async remove(id) {
        return await this.usersRepository.destroy({ where: { id } });
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.USER_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map