import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ClientsService } from 'src/clients/clients.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly clientService: ClientsService) {
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
    const user = await this.clientService.findById(payload.id);
    if (!user) {
      throw new UnauthorizedException(
        'You are not authorized to perform the operation',
      );
    }
    return payload;
  }
}
