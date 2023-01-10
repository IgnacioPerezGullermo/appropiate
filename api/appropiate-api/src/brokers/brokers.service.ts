import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Appointment } from 'src/appointment/entities/appointment.entity';
import { BROKER_REPOSITORY } from '../../core/constants';
import { CreateBrokerDto } from './dto/create-broker.dto';
import { UpdateBrokerDto } from './dto/update-broker.dto';
import { Broker } from './entities/broker.entity';

@Injectable()
export class BrokersService {
  constructor(
    @Inject(BROKER_REPOSITORY)
    private readonly brokerRepository: typeof Broker,
  ) {}

  async create(CreateBrokerDto: CreateBrokerDto) {
    try {
      const broker = new Broker();
      broker.name = CreateBrokerDto.name;
      broker.email = CreateBrokerDto.email.trim().toLowerCase();
      broker.password = CreateBrokerDto.password;
      broker.type = CreateBrokerDto.type;
      broker.tel = CreateBrokerDto.tel;

      const brokerData = await broker.save();
      console.log(brokerData);
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

  async findAll(): Promise<Broker[]> {
    return await this.brokerRepository.findAll<Broker>({
      include: [
        {
          model: Appointment,
        },
      ],
    });
  }

  async findOne(id: string) {
    return await this.brokerRepository.findOne({
      where: { id },
      include: [
        {
          model: Appointment,
        },
      ],
    });
  }

  async update(id: string, updateBrokerDto: UpdateBrokerDto) {
    const broker = await this.brokerRepository.findByPk<Broker>(id);
    if (!broker) {
      throw new BadRequestException(`User does not exist in db `);
    }

    broker.name = updateBrokerDto.name || broker.name;
    broker.email = updateBrokerDto.email || broker.email;
    broker.tel = updateBrokerDto.tel || broker.tel;
    broker.type = updateBrokerDto.type || broker.type;

    try {
      const data = await broker.save();
    } catch (err) {
      throw new InternalServerErrorException(
        `Can't update User - check server logs`,
      );
    }
  }

  remove(id: string) {
    return `This action removes a #${id} broker`;
  }
}
