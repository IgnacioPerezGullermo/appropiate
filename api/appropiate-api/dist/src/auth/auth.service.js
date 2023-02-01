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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const console_1 = require("console");
const users_service_1 = require("../users/users.service");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async validateUser(username, pass) {
        const client = await this.userService.findOneByUsername(username);
        if (!client) {
            return null;
        }
        const loginClient = client['dataValues'];
        const match = await this.comparePassword(pass, loginClient.password);
        if (match === false) {
            return null;
        }
        const _a = client['dataValues'], { password } = _a, result = __rest(_a, ["password"]);
        return result;
    }
    async loginClient(client) {
        const token = await this.generateToken(client);
        return { client, token };
    }
    async loginAdmin(admin) {
        if (admin.username === process.env.SUPERADMINUSER &&
            admin.password === process.env.SUPERADMINPASS) {
            return { msg: `Bienvenido ${admin.username}` };
        }
        else {
            throw console_1.error;
        }
    }
    async createClient(client) {
        const pass = await this.hashPassword(client.password);
        const newClient = await this.userService.create(Object.assign(Object.assign({}, client), { password: pass }));
        const _a = newClient['dataValues'], { password } = _a, result = __rest(_a, ["password"]);
        const token = await this.generateToken(result);
        return { user: result, token };
    }
    async generateToken(client) {
        const token = await this.jwtService.signAsync(client);
        return token;
    }
    async hashPassword(password) {
        const hash = await bcrypt.hash(password, 10);
        return hash;
    }
    async comparePassword(dbPassword, enteredPassword) {
        const match = await bcrypt.compare(dbPassword, enteredPassword);
        console.log(match);
        return match;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map