import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { USER_REPOSITORY } from 'core/constants';
import { Op } from 'sequelize';
import { Broker } from 'src/brokers/entities/broker.entity';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly usersRepository: typeof User,
  ) {}
  async create(createUserDto: CreateUserDto) {
    try {
      const user = new User();
      user.username = createUserDto.username;
      user.email = createUserDto.email;
      user.password = createUserDto.password;
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
    return await this.usersRepository.findAll<User>({
      include: [
        {
          model: Broker,
        },
      ],
    });
  }

  async findById(id: string) {
    return await this.usersRepository.findOne<User>({
      where: { id },
    });
  }

  async findOneByUsername(username: string) {
    return await this.usersRepository.findOne<User>({
      where: { username },
    });
  }
  async findSearchedByUsername(username: string) {
    return await this.usersRepository.findAll<User>({
      where: { username: { [Op.like]: '%' + username + '%' } },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.findByPk<User>(id);
    if (!user) {
      throw new BadRequestException(`User does not exist in db `);
    }

    user.username = updateUserDto.username || user.username;
    user.email = updateUserDto.email || user.email;
    user.brokerId = updateUserDto.brokerId || user.brokerId;
    user.clientId = updateUserDto.clientId || user.clientId;

    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const data = await user.save();
    } catch (err) {
      throw new InternalServerErrorException(
        `Can't update Client - check server logs`,
      );
    }
  }

  async remove(id: string) {
    return await this.usersRepository.destroy({ where: { id } });
  }
}
