import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Appointment } from 'src/appointment/entities/appointment.entity';
import { CLIENTS_REPOSITORY } from '../../core/constants';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientsService {
  constructor(
    @Inject(CLIENTS_REPOSITORY)
    private readonly clientRepository: typeof Client,
  ) {}

  async create(createClientDto: CreateClientDto) {
    try {
      const client = new Client();
      client.username = createClientDto.username;
      client.email = createClientDto.email;
      client.password = createClientDto.password;
      const clientData = await client.save();
      //console.log(clientData);
      return clientData;
    } catch (error) {
      console.log(error);
      if (error.code === 11000) {
        //si consologeamos el error nos va a mostrar tanto la propiedad code, como la propiedad keyValue
        throw new BadRequestException(
          `Client exist in db ${JSON.stringify(error.keyValue)}`,
        );
      }
      console.log(error);
      throw new InternalServerErrorException(
        `Can't create Client - check server logs`,
      );
    }
  }

  async findAll() {
    return await this.clientRepository.findAll<Client>({
      include: [
        {
          model: Appointment,
        },
      ],
    });
  }

  async findById(id: string) {
    return await this.clientRepository.findOne({
      where: { id },
      include: [
        {
          model: Appointment,
        },
      ],
    });
  }

  async findOneByUsername(username: string) {
    return await this.clientRepository.findOne<Client>({ where: { username } });
  }

  async update(id: string, updateClientDto: UpdateClientDto) {
    const client = await this.clientRepository.findByPk<Client>(id);
    if (!client) {
      throw new BadRequestException(`User does not exist in db `);
    }

    client.username = updateClientDto.username || client.username;
    client.email = updateClientDto.email || client.email;

    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const data = await client.save();
    } catch (err) {
      throw new InternalServerErrorException(
        `Can't update Client - check server logs`,
      );
    }
  }

  remove(id: string) {
    return `This action removes a #${id} client`;
  }
}
