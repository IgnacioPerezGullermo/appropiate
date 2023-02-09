import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Appointment } from 'src/appointment/entities/appointment.entity';
import { User } from 'src/users/entities/user.entity';
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

  async create(createBrokerDto: CreateBrokerDto) {
    try {
      const broker = new Broker();
      broker.lastName = createBrokerDto.lastName;
      broker.firstName = createBrokerDto.firstName;
      broker.profilePicture = createBrokerDto.profilePicture;
      broker.userId = createBrokerDto.userId;

      console.log(createBrokerDto.userId);
      const brokerData = await broker.save();
      return brokerData;
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

  async find({ page, pageSize }): Promise<Broker[]> {
    const offset = page * pageSize;
    const limit = pageSize;
    return await this.brokerRepository.findAll<Broker>({
      limit,
      offset,
      include: [
        {
          model: User,
        },
      ],
    });
  }

  async findOne(id: string) {
    return await this.brokerRepository.findOne({
      where: { id },
      include: [
        {
          model: User,
        },
      ],
    });
  }
  async findOneByUsername(username: string) {
    return await this.brokerRepository.findOne<Broker>({ where: { username } });
  }

  async update(id: string, updateBrokerDto: UpdateBrokerDto) {
    const broker = await this.brokerRepository.findByPk<Broker>(id);
    if (!broker) {
      throw new BadRequestException(`User does not exist in db `);
    }

    broker.lastName = updateBrokerDto.lastName || broker.lastName;
    broker.firstName = updateBrokerDto.firstName || broker.firstName;
    broker.profilePicture =
      updateBrokerDto.profilePicture || broker.profilePicture;

    try {
      const data = await broker.save();
    } catch (err) {
      throw new InternalServerErrorException(
        `Can't update User - check server logs`,
      );
    }
  }

  async remove(id: string) {
    return await this.brokerRepository.destroy({ where: { id } });
  }
}
