import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { APPOINTMENT_REPOSITORY } from 'core/constants';
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
  async create(createAppointmentDto: CreateAppointmentDto) {
    try {
      const appointment = new Appointment();
      appointment.title = createAppointmentDto.title;
      appointment.date = createAppointmentDto.date;
      appointment.brokerId = createAppointmentDto.brokerId;
      appointment.clientId = createAppointmentDto.clientId;
      appointment.type = createAppointmentDto.type;

      const appointmenteData = await appointment.save();
      console.log(appointmenteData);
    } catch (error) {
      console.log(error);
      if (error.code === 11000) {
        //si consologeamos el error nos va a mostrar tanto la propiedad code, como la propiedad keyValue
        throw new BadRequestException(
          `User exist in db ${JSON.stringify(error.keyValue)}`,
        );
      }
      console.log(error);
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
        {
          model: Broker,
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

  update(id: number, updateAppointmentDto: UpdateAppointmentDto) {
    return `This action updates a #${id} appointment`;
  }

  remove(id: number) {
    return `This action removes a #${id} appointment`;
  }
}
