import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'secret',
      issuer: 'accounts.examplesoft.com',
      audience: 'yoursite.net',
    });
  }

  async validate(payload: any) {
    // check if user in the token actually exist
    const user = await this.userService.findById(payload.id);
    if (!user) {
      throw new UnauthorizedException(
        'No tiene autorizacion para realizar la siguiente operacion',
      );
    }
    return payload;
  }
}
