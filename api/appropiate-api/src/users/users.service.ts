import { MailerService } from '@nestjs-modules/mailer';
import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { USER_REPOSITORY } from 'core/constants';
import { Op } from 'sequelize';
import { AuthService } from 'src/auth/auth.service';
import { Broker } from 'src/brokers/entities/broker.entity';
import { Client } from 'src/clients/entities/client.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly usersRepository: typeof User,
    private mailerService: MailerService,
  ) {}
  async create(createUserDto: CreateUserDto) {
    try {
      const user = new User();
      user.username = createUserDto.username;
      user.email = createUserDto.email;
      user.password = createUserDto.password;
      const userData = await user.save();
      //console.log(clientData);
      //const verificationMail = await this.mailerService.sendMail({
      //  to: userData.email,
      //  from: 'nacho71197@gmail.com',
      //  subject: 'Verifica tu cuenta',
      //  text: `Para proceder, ingresa al siguiente link para verificar tu cuenta: http://localhost:5173/verification?id=${userData.id}`,
      //});
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
        {
          model: Client,
        },
      ],
    });
  }

  async findById(id: string) {
    return await this.usersRepository.findOne<User>({
      where: { id },
      include: [
        {
          model: Broker,
        },
        {
          model: Client,
        },
      ],
    });
  }

  async findOneByUsername(username: string) {
    return await this.usersRepository.findOne<User>({
      where: { username },
      include: [
        {
          model: Broker,
        },
        {
          model: Client,
        },
      ],
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
      return data;
    } catch (err) {
      throw new InternalServerErrorException(
        `Can't update Client - check server logs`,
      );
    }
  }

  async remove(id: string) {
    return await this.usersRepository.destroy({ where: { id } });
  }

  async verifyUser(id: string) {
    const user = await this.usersRepository.findByPk<User>(id);
    if (!user) {
      throw new BadRequestException(`User does not exist in db `);
    }
    user.verified = true;
    console.log(user);
    try {
      console.log('Me ejecute');
      const data = await user.save();
      return data;
    } catch (err) {
      throw new InternalServerErrorException(
        `Can't update Client - check server logs`,
      );
    }
  }

  async resetPassword(email: string) {
    const user = await this.usersRepository.findOne<User>({
      where: {
        email,
      },
    });
    if (!user) {
      throw new BadRequestException(`Usuario inexistente en la base de datos`);
    }
    console.log(user);
    try {
      const email = await this.mailerService.sendMail({
        to: user.email,
        from: 'nacho71197@gmail.com',
        subject: 'Recuperación de contraseña',
        text: `Ingresa al siguiente link para cambiar tu contraseña: http://localhost:5173/resetpassword?id=${user.id}`,
      });
    } catch (err) {
      throw new InternalServerErrorException(
        `Can't update Client - check server logs`,
      );
    }
  }

  async updatePassword(id: string, password: string) {
    const user = await this.usersRepository.findByPk<User>(id);
    if (!user) {
      throw new BadRequestException(`Usuario inexistente en la base de datos`);
    }
    //console.log(user);
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    try {
      const data = await user.save();
      return data;
    } catch (err) {
      throw new InternalServerErrorException(
        `Can't update Client - check server logs`,
      );
    }
  }
}
