import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { ClientsService } from 'src/clients/clients.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly clientService: ClientsService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    // find if user exist with this email
    const client = await this.clientService.findOneByUsername(username);
    //console.log(client['dataValues']);
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
    const { password, ...result } = client['dataValues'];
    //console.log(result);
    return result;
  }

  public async login(client) {
    const token = await this.generateToken(client);
    return { client, token };
  }

  public async create(client) {
    const pass = await this.hashPassword(client.password);

    const newClient = await this.clientService.create({
      ...client,
      password: pass,
    });
    //console.log(newClient);
    const { password, ...result } = newClient['dataValues'];

    const token = await this.generateToken(result);

    return { user: result, token };
  }

  private async generateToken(client) {
    const token = await this.jwtService.signAsync(client);
    return token;
  }

  private async hashPassword(password) {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  }

  private async comparePassword(enteredPassword, dbPassword) {
    // const match = await bcrypt.compare(enteredPassword, dbPassword);
    if (enteredPassword === dbPassword) {
      const match = true;
      return match;
    } else {
      const match = false;
      return match;
    }
    //console.log(enteredPassword, dbPassword);
  }
}
