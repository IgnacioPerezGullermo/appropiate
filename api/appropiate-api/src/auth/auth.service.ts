import { ConsoleLogger, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { error } from 'console';
import { BrokersService } from 'src/brokers/brokers.service';
import { UserService } from 'src/clients/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly brokerService: BrokersService,
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    // find if user exist with this email
    const client = await this.userService.findOneByUsername(username);
    if (!client) {
      return null;
    }
    const loginClient = client['dataValues'];

    // find if user password match
    const match = await this.comparePassword(pass, loginClient.password);
    if (!match) {
      console.log(match);
      return null;
    }

    // tslint:disable-next-line: no-string-literal
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = client['dataValues'];

    return result;
  }
  async validateBroker(username: string, pass: string): Promise<any> {
    // find if user exist with this email
    const broker = await this.brokerService.findOneByUsername(username);
    if (!broker) {
      console.log('no puedo encontrar al Broker');
      return null;
    }
    console.log(broker);
    const loginBroker = broker['dataValues'];

    // find if user password match
    const match = await this.comparePassword(pass, loginBroker.password);
    console.log(match);
    if (!match) {
      return null;
    }

    // tslint:disable-next-line: no-string-literal
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = broker['dataValues'];

    return result;
  }
  public async loginClient(client) {
    const token = await this.generateToken(client);
    return { client, token };
  }
  public async loginBroker(broker) {
    const token = await this.generateToken(broker);
    return { broker, token };
  }
  public async loginAdmin(admin) {
    //console.log(admin);
    console.log(admin.username, process.env.SUPERADMINUSER);
    if (
      admin.username === process.env.SUPERADMINUSER &&
      admin.password === process.env.SUPERADMINPASS
    ) {
      return { msg: `Bienvenido ${admin.username}` };
    } else {
      throw error;
    }
  }

  public async createClient(client) {
    const pass = await this.hashPassword(client.password);

    const newClient = await this.userService.create({
      ...client,
      password: pass,
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = newClient['dataValues'];

    const token = await this.generateToken(result);

    return { user: result, token };
  }
  public async createBroker(broker) {
    const pass = await this.hashPassword(broker.password);

    const newBroker = await this.brokerService.create({
      ...broker,
      password: pass,
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    console.log(newBroker);
    const { password, ...result } = newBroker['dataValues'];

    const token = await this.generateToken(result);

    return { broker: result, token };
  }

  private async generateToken(client) {
    const token = await this.jwtService.signAsync(client);
    return token;
  }

  private async hashPassword(password) {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  }

  private async comparePassword(dbPassword, enteredPassword) {
    const match = await bcrypt.compare(dbPassword, enteredPassword);
    console.log(match);
    return match;
  }
}
