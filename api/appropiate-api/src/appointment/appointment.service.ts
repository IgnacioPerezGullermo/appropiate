import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { APPOINTMENT_REPOSITORY } from 'core/constants';
import { google } from 'googleapis';
import { Broker } from 'src/brokers/entities/broker.entity';
import { Client } from 'src/clients/entities/client.entity';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { Appointment } from './entities/appointment.entity';

@Injectable()
export class AppointmentService {
  constructor(
    @Inject(APPOINTMENT_REPOSITORY)
    private readonly appointmentRepository: typeof Appointment,
  ) {}

  // async checkAvailability(date: string, starstAt: string) {
  //   interface checkInterface {
  //     timeMin: string;
  //     timeMax: string;
  //     groupExpansionMax: number;
  //     calendarExpansionMax: number;
  //     timeZone: string;
  //     items: [
  //       {
  //         id: string;
  //       },
  //     ];
  //   }
  //   function timeCheck(dateA, dateB, dateX, dateY) {
  //     if (
  //       Math.min(dateA, dateB) <= Math.max(dateX, dateY) &&
  //       Math.max(dateA, dateB) >= Math.min(dateX, dateY)
  //     ) {
  //       // between
  //       console.log('Disponible');
  //       return true;
  //     }
  //     //console.log('Este bloque horario choca con el solicitado');
  //     return false;
  //   }
  //   try {
  //     const { OAuth2 } = google.auth;
  //     const OAuth2Client = new OAuth2(
  //       process.env.GOOGLECLIENT,
  //       process.env.GOOGLESECRET,
  //       'https://developers.google.com/oauthplayground',
  //     );
  //     OAuth2Client.setCredentials({
  //       refresh_token: process.env.GOOGLEREFRESH,
  //     });
  //     const calendar = google.calendar({ version: 'v3', auth: OAuth2Client });
  //     const timeArray = [date, starstAt];
  //     const timeString = timeArray.join(' ');
  //     const eventStartTime = new Date(timeString);
  //     const start = eventStartTime.toISOString();
  //     //console.log(start, eventStartTime);
  //     const eventEndTime = new Date(eventStartTime);
  //     eventEndTime.setHours(eventStartTime.getHours() + 1);
  //     const end = eventEndTime.toISOString();
  //     const check: checkInterface = {
  //       timeMin: start,
  //       timeMax: end,
  //       groupExpansionMax: null,
  //       calendarExpansionMax: null,
  //       timeZone: 'America/Santiago',
  //       items: [
  //         {
  //           id: '6442f38ea435ec3081b0685b63c9bb0434d25507dcfd7ab842eae6d0f8ad2775@group.calendar.google.com',
  //         },
  //       ],
  //     };
  //     calendar.freebusy.query({ requestBody: check }, function (err, res) {
  //       if (err) return console.error('Free Busy Query Error', err);
  //       const eventsArr =
  //         res.data.calendars[
  //           '6442f38ea435ec3081b0685b63c9bb0434d25507dcfd7ab842eae6d0f8ad2775@group.calendar.google.com'
  //         ].busy;
  //       const overlaps = [];
  //       eventsArr.map((item) => {
  //         const startTime = new Date(item.start).toJSON();
  //         const endTime = new Date(item.end).toJSON();
  //         return overlaps.push(timeCheck(startTime, endTime, start, end));
  //       });
  //       if (overlaps[0] === false) {
  //         return overlaps;
  //       } else {
  //         const confirmation = 'All good';
  //         return confirmation;
  //       }
  //     });
  //   } catch (error) {
  //     if (error.code === 11000) {
  //       //si consologeamos el error nos va a mostrar tanto la propiedad code, como la propiedad keyValue
  //       throw new BadRequestException(
  //         `User exist in db ${JSON.stringify(error.keyValue)}`,
  //       );
  //     }
  //     //console.log(error);
  //     throw new InternalServerErrorException(
  //       `Can't create User - check server logs`,
  //     );
  //   }
  // }
  async create(createAppointmentDto: CreateAppointmentDto) {
    interface eventInterface {
      summary: string;
      description: string;
      start: {
        dateTime: string;
        timeZone: string;
      };
      end: {
        dateTime: string;
        timeZone: string;
      };
      attendees: Array<attendeeInterface>;
      colorId: string;
      visibility: string;
    }

    interface attendeeInterface {
      email: string;
    }

    try {
      const { OAuth2 } = google.auth;
      const appointment = new Appointment();
      appointment.title = createAppointmentDto.title;
      appointment.description = createAppointmentDto.description;
      appointment.date = createAppointmentDto.date;
      appointment.startsAt = createAppointmentDto.starstAt;
      appointment.brokerId = createAppointmentDto.brokerId;
      appointment.clientId = createAppointmentDto.clientId;
      appointment.type = createAppointmentDto.type;
      //appointment.attendees = [{ email: 'nacho71197@gmail.com' }];
      // NOTA: ateendees ha de ser un array que incluya los mails tanto, del usuario, como del broker
      // console.log(createAppointmentDto.starstAt);
      const OAuth2Client = new OAuth2(
        process.env.GOOGLECLIENT,
        process.env.GOOGLESECRET,
        'https://developers.google.com/oauthplayground',
      );
      OAuth2Client.setCredentials({
        refresh_token: process.env.GOOGLEREFRESH,
      });
      const calendar = google.calendar({ version: 'v3', auth: OAuth2Client });
      const timeArray = [appointment.date, appointment.startsAt];
      const timeString = timeArray.join(' ');
      const eventStartTime = new Date(timeString);
      const start = eventStartTime.toISOString();
      //console.log(start, eventStartTime);
      const eventEndTime = new Date(eventStartTime);
      eventEndTime.setHours(eventStartTime.getHours() + 1);
      const end = eventEndTime.toISOString();
      //console.log(end, eventEndTime);

      const event: eventInterface = {
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
        attendees: [{ email: 'nacho71197@hotmail.com' }],
        colorId: '4',
        visibility: 'private',
      };
      calendar.events.insert(
        {
          calendarId:
            '6442f38ea435ec3081b0685b63c9bb0434d25507dcfd7ab842eae6d0f8ad2775@group.calendar.google.com',
          requestBody: event,
        },
        async (err, res) => {
          if (err) {
            return console.error('Calendar Event Creation Failed', err);
          }
          appointment.googleId = res.data.id;

          const appointmenteData = await appointment.save();
          return appointmenteData;
        },
      );
    } catch (error) {
      //console.log(error);
      if (error.code === 11000) {
        //si consologeamos el error nos va a mostrar tanto la propiedad code, como la propiedad keyValue
        throw new BadRequestException(
          `User exist in db ${JSON.stringify(error.keyValue)}`,
        );
      }
      //console.log(error);
      throw new InternalServerErrorException(
        `Can't create User - check server logs`,
      );
    }
  }

  async findAll(): Promise<Appointment[]> {
    return await this.appointmentRepository.findAll<Appointment>({
      include: [
        {
          model: Client,
          attributes: { exclude: ['password'] },
        },
      ],
    });
  }

  async findOne(id: string) {
    return await this.appointmentRepository.findOne({
      where: { id },
      include: [
        {
          model: Client,
          attributes: { exclude: ['password'] },
        },
        {
          model: Broker,
          attributes: { exclude: ['password'] },
        },
      ],
    });
  }

  async update(id: string, updateAppointmentDto: UpdateAppointmentDto) {
    interface checkInterface {
      timeMin: string;
      timeMax: string;
      groupExpansionMax: number;
      calendarExpansionMax: number;
      timeZone: string;
      items: [
        {
          id: string;
        },
      ];
    }
    interface eventInterface {
      summary: string;
      description: string;
      start: {
        dateTime: string;
        timeZone: string;
      };
      end: {
        dateTime: string;
        timeZone: string;
      };
      attendees: Array<attendeeInterface>;
      colorId: string;
      visibility: string;
    }

    interface attendeeInterface {
      email: string;
    }
    function timeCheck(dateA, dateB, dateX, dateY) {
      if (
        Math.min(dateA, dateB) <= Math.max(dateX, dateY) &&
        Math.max(dateA, dateB) >= Math.min(dateX, dateY)
      ) {
        // between
        console.log('Disponible');
        return true;
      }
      console.log('Este bloque horario choca con el solicitado');
      return false;
    }
    const { OAuth2 } = google.auth;
    const appointment = this.appointmentRepository.findByPk<Appointment>(id);
    if (!appointment) {
      throw new BadRequestException(`User does not exist in db `);
    }
    try {
      const appointment = this.appointmentRepository.findByPk<Appointment>(id);
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
      (await appointment).clientId =
        updateAppointmentDto.clientId || (await appointment).clientId;
      (await appointment).type =
        updateAppointmentDto.type || (await appointment).type;
      //appointment.attendees = [{ email: 'nacho71197@gmail.com' }];
      // NOTA: ateendees ha de ser un array que incluya los mails tanto, del usuario, como del broker

      const OAuth2Client = new OAuth2(
        process.env.GOOGLECLIENT,
        process.env.GOOGLESECRET,
        'https://developers.google.com/oauthplayground',
      );
      OAuth2Client.setCredentials({
        refresh_token: process.env.GOOGLEREFRESH,
      });
      const calendar = google.calendar({ version: 'v3', auth: OAuth2Client });
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

      const event: eventInterface = {
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

      const check: checkInterface = {
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
        if (err) return console.error('Free Busy Query Error', err);
        const eventsArr =
          res.data.calendars[
            '6442f38ea435ec3081b0685b63c9bb0434d25507dcfd7ab842eae6d0f8ad2775@group.calendar.google.com'
          ].busy;
        const overlaps = [];
        eventsArr.map((item) => {
          const startTime = new Date(item.start).toJSON();
          const endTime = new Date(item.end).toJSON();
          console.log(
            startTime,
            endTime,
            event.start.dateTime,
            event.end.dateTime,
          );
          return overlaps.push(
            timeCheck(
              startTime,
              endTime,
              event.start.dateTime,
              event.end.dateTime,
            ),
          );
        });
        console.log(overlaps);
        if (eventsArr.length === 0) {
          eventsArr.map((item) => {
            timeCheck(
              item.start,
              item.end,
              event.start.dateTime,
              event.end.dateTime,
            );
          });
          return calendar.events.update(
            {
              calendarId:
                '6442f38ea435ec3081b0685b63c9bb0434d25507dcfd7ab842eae6d0f8ad2775@group.calendar.google.com',
              requestBody: event,
              eventId: googleId,
            },
            async (err, res) => {
              if (err)
                return console.error('Calendar Event Creation Failed', err);
              console.log(appointment);
              const appointmenteData = (await appointment).save();
              return console.log(
                'Event Creation Success',
                appointmenteData,
                res,
              );
            },
          );
        }
        return console.log('The broker is unavailable at that time');
      });
    } catch {}
  }

  async remove(id: string) {
    const appointment = await this.appointmentRepository.findOne({
      where: { id },
    });
    const googleId = appointment.googleId;
    const { OAuth2 } = google.auth;
    const OAuth2Client = new OAuth2(
      process.env.GOOGLECLIENT,
      process.env.GOOGLESECRET,
      'https://developers.google.com/oauthplayground',
    );
    OAuth2Client.setCredentials({
      refresh_token: process.env.GOOGLEREFRESH,
    });
    const calendar = google.calendar({ version: 'v3', auth: OAuth2Client });
    calendar.events.delete(
      {
        calendarId:
          '6442f38ea435ec3081b0685b63c9bb0434d25507dcfd7ab842eae6d0f8ad2775@group.calendar.google.com',
        eventId: googleId,
      },
      async (err, res) => {
        if (err) return console.error('Calendar Event Deletion Failed', err);

        console.log('Event Deletion Succeed', res);
        return await this.appointmentRepository.destroy({
          where: { id },
        });
      },
    );
  }
}
