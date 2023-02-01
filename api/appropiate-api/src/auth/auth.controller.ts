import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateBrokerDto } from 'src/brokers/dto/create-broker.dto';
import { Admin } from 'src/clients/entities/admin.entity';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post('clients/login')
  async loginClient(@Request() req) {
    return await this.authService.loginClient(req.user);
  }

  @Post('users/signup')
  async signupClient(@Body() user: CreateUserDto) {
    return await this.authService.createClient(user);
  }

  @Post('admin/login')
  async loginAdmin(@Body() admin: Admin) {
    //console.log(admin);
    return await this.authService.loginAdmin(admin);
  }
  // @ApiTags('Auth')
  // @UseGuards(LocalAuthGuard)
  // @Post('broker/login')
  // async loginBroker(@Request() req) {
  //   console.log(req);
  //   return await this.authService.loginBroker(req.user);
  // }
  // @ApiTags('Auth')
  // @Post('broker/signup')
  // async signupBroker(@Body() broker: CreateBrokerDto) {
  //   return await this.authService.createBroker(broker);
  // }
}
