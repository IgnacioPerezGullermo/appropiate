import { ConsoleLogger, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { error } from 'console';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
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
    if (match === false) {
      return null;
    }

    // tslint:disable-next-line: no-string-literal
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = client['dataValues'];

    return result;
  }

  public async loginClient(client) {
    const token = await this.generateToken(client);
    return { client, token };
  }
  public async loginAdmin(admin) {
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
