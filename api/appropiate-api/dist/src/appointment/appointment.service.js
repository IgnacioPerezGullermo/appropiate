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
const googleapis_1 = require("googleapis");
const broker_entity_1 = require("../brokers/entities/broker.entity");
const user_entity_1 = require("../clients/entities/user.entity");
const appointment_entity_1 = require("./entities/appointment.entity");
let AppointmentService = class AppointmentService {
    constructor(appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }
    async create(createAppointmentDto) {
        function timeCheck(dateA, dateB, dateX, dateY) {
            if (Math.min(dateA, dateB) <= Math.max(dateX, dateY) &&
                Math.max(dateA, dateB) >= Math.min(dateX, dateY)) {
                console.log('Disponible');
                return true;
            }
            console.log('Este bloque horario choca con el solicitado');
            return false;
        }
        try {
            const { OAuth2 } = googleapis_1.google.auth;
            const appointment = new appointment_entity_1.Appointment();
            appointment.title = createAppointmentDto.title;
            appointment.description = createAppointmentDto.description;
            appointment.date = createAppointmentDto.date;
            appointment.startsAt = createAppointmentDto.starstAt;
            appointment.brokerId = createAppointmentDto.brokerId;
            appointment.userId = createAppointmentDto.clientId;
            appointment.type = createAppointmentDto.type;
            const OAuth2Client = new OAuth2(process.env.GOOGLECLIENT, process.env.GOOGLESECRET, 'https://developers.google.com/oauthplayground');
            OAuth2Client.setCredentials({
                refresh_token: process.env.GOOGLEREFRESH,
            });
            const calendar = googleapis_1.google.calendar({ version: 'v3', auth: OAuth2Client });
            const timeArray = [appointment.date, appointment.startsAt];
            const timeString = timeArray.join(' ');
            const eventStartTime = new Date(timeString);
            const start = eventStartTime.toISOString();
            console.log(start, eventStartTime);
            const eventEndTime = new Date(eventStartTime);
            eventEndTime.setHours(eventStartTime.getHours() + 1);
            const end = eventEndTime.toISOString();
            console.log(end, eventEndTime);
            const event = {
                summary: appointment.title,
                description: appointment.description,
                start: {
                    dateTime: start,
                    timeZone: 'America/Santiago',
                },
                end: {
                    dateTime: end,
                    timeZone: 'America/Santiago',
                },
                attendees: [
                    { email: 'nacho71197@hotmail.com' },
                    { email: 'mariajesus@appropiate.cl' },
                    { email: 'info@appropiate.cl' },
                ],
                colorId: '4',
                visibility: 'private',
            };
            const check = {
                timeMin: event.start.dateTime,
                timeMax: event.end.dateTime,
                groupExpansionMax: null,
                calendarExpansionMax: null,
                timeZone: 'America/Santiago',
                items: [
                    {
                        id: '6442f38ea435ec3081b0685b63c9bb0434d25507dcfd7ab842eae6d0f8ad2775@group.calendar.google.com',
                    },
                ],
            };
            calendar.freebusy.query({ requestBody: check }, function (err, res) {
                if (err)
                    return console.error('Free Busy Query Error', err);
                const eventsArr = res.data.calendars['6442f38ea435ec3081b0685b63c9bb0434d25507dcfd7ab842eae6d0f8ad2775@group.calendar.google.com'].busy;
                const overlaps = [];
                eventsArr.map((item) => {
                    const startTime = new Date(item.start).toJSON();
                    const endTime = new Date(item.end).toJSON();
                    console.log(startTime, endTime, event.start.dateTime, event.end.dateTime);
                    return overlaps.push(timeCheck(startTime, endTime, event.start.dateTime, event.end.dateTime));
                });
                console.log(overlaps);
                if (eventsArr.length === 0) {
                    eventsArr.map((item) => {
                        timeCheck(item.start, item.end, event.start.dateTime, event.end.dateTime);
                    });
                    return calendar.events.insert({
                        calendarId: '6442f38ea435ec3081b0685b63c9bb0434d25507dcfd7ab842eae6d0f8ad2775@group.calendar.google.com',
                        requestBody: event,
                    }, async (err, res) => {
                        if (err)
                            return console.error('Calendar Event Creation Failed', err);
                        appointment.googleId = res.data.id;
                        console.log(appointment);
                        const appointmenteData = await appointment.save();
                        return console.log('Event Creation Success');
                    });
                }
                return console.log('The broker is unavailable at that time');
            });
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
                    model: user_entity_1.User,
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
                    model: user_entity_1.User,
                    attributes: { exclude: ['password'] },
                },
                {
                    model: broker_entity_1.Broker,
                    attributes: { exclude: ['password'] },
                },
            ],
        });
    }
    async update(id, updateAppointmentDto) {
        function timeCheck(dateA, dateB, dateX, dateY) {
            if (Math.min(dateA, dateB) <= Math.max(dateX, dateY) &&
                Math.max(dateA, dateB) >= Math.min(dateX, dateY)) {
                console.log('Disponible');
                return true;
            }
            console.log('Este bloque horario choca con el solicitado');
            return false;
        }
        const { OAuth2 } = googleapis_1.google.auth;
        const appointment = this.appointmentRepository.findByPk(id);
        if (!appointment) {
            throw new common_1.BadRequestException(`User does not exist in db `);
        }
        try {
            const appointment = this.appointmentRepository.findByPk(id);
            const googleId = (await appointment).googleId;
            (await appointment).title =
                updateAppointmentDto.title || (await appointment).title;
            (await appointment).description =
                updateAppointmentDto.description || (await appointment).description;
            (await appointment).date =
                updateAppointmentDto.date || (await appointment).date;
            (await appointment).startsAt =
                updateAppointmentDto.starstAt || (await appointment).startsAt;
            (await appointment).brokerId =
                updateAppointmentDto.brokerId || (await appointment).brokerId;
            (await appointment).userId =
                updateAppointmentDto.clientId || (await appointment).userId;
            (await appointment).type =
                updateAppointmentDto.type || (await appointment).type;
            const OAuth2Client = new OAuth2(process.env.GOOGLECLIENT, process.env.GOOGLESECRET, 'https://developers.google.com/oauthplayground');
            OAuth2Client.setCredentials({
                refresh_token: process.env.GOOGLEREFRESH,
            });
            const calendar = googleapis_1.google.calendar({ version: 'v3', auth: OAuth2Client });
            const timeArray = [
                (await appointment).date,
                (await appointment).startsAt,
            ];
            const timeString = timeArray.join(' ');
            const eventStartTime = new Date(timeString);
            const start = eventStartTime.toISOString();
            console.log(start, eventStartTime);
            const eventEndTime = new Date(eventStartTime);
            eventEndTime.setHours(eventStartTime.getHours() + 1);
            const end = eventEndTime.toISOString();
            console.log(end, eventEndTime);
            const event = {
                summary: (await appointment).title,
                description: (await appointment).description,
                start: {
                    dateTime: start,
                    timeZone: 'America/Santiago',
                },
                end: {
                    dateTime: end,
                    timeZone: 'America/Santiago',
                },
                attendees: [{ email: 'nacho71197@hotmail.com' }],
                colorId: '4',
                visibility: 'private',
            };
            const check = {
                timeMin: event.start.dateTime,
                timeMax: event.end.dateTime,
                groupExpansionMax: null,
                calendarExpansionMax: null,
                timeZone: 'America/Santiago',
                items: [
                    {
                        id: '6442f38ea435ec3081b0685b63c9bb0434d25507dcfd7ab842eae6d0f8ad2775@group.calendar.google.com',
                    },
                ],
            };
            calendar.freebusy.query({ requestBody: check }, function (err, res) {
                if (err)
                    return console.error('Free Busy Query Error', err);
                const eventsArr = res.data.calendars['6442f38ea435ec3081b0685b63c9bb0434d25507dcfd7ab842eae6d0f8ad2775@group.calendar.google.com'].busy;
                const overlaps = [];
                eventsArr.map((item) => {
                    const startTime = new Date(item.start).toJSON();
                    const endTime = new Date(item.end).toJSON();
                    console.log(startTime, endTime, event.start.dateTime, event.end.dateTime);
                    return overlaps.push(timeCheck(startTime, endTime, event.start.dateTime, event.end.dateTime));
                });
                console.log(overlaps);
                if (eventsArr.length === 0) {
                    eventsArr.map((item) => {
                        timeCheck(item.start, item.end, event.start.dateTime, event.end.dateTime);
                    });
                    return calendar.events.update({
                        calendarId: '6442f38ea435ec3081b0685b63c9bb0434d25507dcfd7ab842eae6d0f8ad2775@group.calendar.google.com',
                        requestBody: event,
                        eventId: googleId,
                    }, async (err, res) => {
                        if (err)
                            return console.error('Calendar Event Creation Failed', err);
                        console.log(appointment);
                        const appointmenteData = (await appointment).save();
                        return console.log('Event Creation Success');
                    });
                }
                return console.log('The broker is unavailable at that time');
            });
        }
        catch (_a) { }
    }
    async remove(id) {
        const appointment = await this.appointmentRepository.findOne({
            where: { id },
        });
        const googleId = appointment.googleId;
        const { OAuth2 } = googleapis_1.google.auth;
        const OAuth2Client = new OAuth2(process.env.GOOGLECLIENT, process.env.GOOGLESECRET, 'https://developers.google.com/oauthplayground');
        OAuth2Client.setCredentials({
            refresh_token: process.env.GOOGLEREFRESH,
        });
        const calendar = googleapis_1.google.calendar({ version: 'v3', auth: OAuth2Client });
        calendar.events.delete({
            calendarId: '6442f38ea435ec3081b0685b63c9bb0434d25507dcfd7ab842eae6d0f8ad2775@group.calendar.google.com',
            eventId: googleId,
        }, async (err, res) => {
            if (err)
                return console.error('Calendar Event Deletion Failed', err);
            console.log('Event Deletion Succeed');
            return await this.appointmentRepository.destroy({
                where: { id },
            });
        });
    }
};
AppointmentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.APPOINTMENT_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], AppointmentService);
exports.AppointmentService = AppointmentService;
//# sourceMappingURL=appointment.service.js.map