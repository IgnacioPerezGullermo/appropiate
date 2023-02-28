import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Appointment } from 'src/appointment/entities/appointment.entity';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { CLIENT_REPOSITORY } from '../../core/constants';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientsService {
  constructor(
    @Inject(CLIENT_REPOSITORY)
    private readonly clientsRepository: typeof Client,
    private cloudinaryService: CloudinaryService,
  ) {}

  async create(createClientDto: CreateClientDto) {
    try {
      const user = new Client();
      user.firstName = createClientDto.firstName;
      user.lastName = createClientDto.lastName;
      user.age = createClientDto.age;
      user.basicIncome = createClientDto.basicIncome;
      user.currentSavings = createClientDto.currentSavings;
      user.bankCredit = createClientDto.bankCredit;
      user.userId = createClientDto.userId;
      const userData = await user.save();
      //console.log(clientData);
      return userData;
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
    return await this.clientsRepository.findAll<Client>();
  }

  async findByType(type: string) {
    return await this.clientsRepository.findAll({
      where: { type },
      include: [
        {
          model: Appointment,
        },
      ],
    });
  }
  async findById(id: string) {
    return await this.clientsRepository.findOne({
      where: { id },
      include: [
        {
          model: Appointment,
        },
      ],
    });
  }

  async findOneByUsername(username: string) {
    return await this.clientsRepository.findOne<Client>({
      where: { username },
    });
  }

  async update(id: string, updateClientDto: UpdateClientDto) {
    const user = await this.clientsRepository.findByPk<Client>(id);
    if (!user) {
      throw new BadRequestException(`User does not exist in db `);
    }

    user.firstName = updateClientDto.firstName;
    user.lastName = updateClientDto.lastName;
    user.age = updateClientDto.age;
    user.basicIncome = updateClientDto.basicIncome;
    user.currentSavings = updateClientDto.currentSavings;
    user.bankCredit = updateClientDto.bankCredit;
    user.userId = updateClientDto.userId;

    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const data = await user.save();
    } catch (err) {
      throw new InternalServerErrorException(
        `Can't update Client - check server logs`,
      );
    }
  }

  async updateProfilePicture(id: string, file: Express.Multer.File) {
    const user = await this.clientsRepository.findByPk<Client>(id);
    if (!user) {
      throw new BadRequestException(`User does not exist in db `);
    }
    this.cloudinaryService
      .uploadImage(file)
      .then(async (result) => {
        user.profilePicture = result.url;
        const data = await user.save();
      })
      .catch(() => {
        throw new BadRequestException('Invalid file type.');
      });
  }

  async remove(id: string) {
    return await this.clientsRepository.destroy({ where: { id } });
  }
}
