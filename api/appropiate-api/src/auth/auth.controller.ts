import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateBrokerDto } from 'src/brokers/dto/create-broker.dto';
import { CreateUserDto } from 'src/clients/dto/create-user.dto';
import { Admin } from 'src/clients/entities/admin.entity';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiTags('Auth')
  @UseGuards(LocalAuthGuard)
  @Post('clients/login')
  async loginClient(@Request() req) {
    console.log(req.user);
    return await this.authService.loginClient(req.user);
  }
  @ApiTags('Auth')
  @Post('clients/signup')
  async signupClient(@Body() user: CreateUserDto) {
    return await this.authService.createClient(user);
  }

  @ApiTags('Auth')
  @Post('admin/login')
  async loginAdmin(@Body() admin: Admin) {
    //console.log(admin);
    return await this.authService.loginAdmin(admin);
  }
  @ApiTags('Auth')
  @UseGuards(LocalAuthGuard)
  @Post('broker/login')
  async loginBroker(@Request() req) {
    console.log(req);
    return await this.authService.loginBroker(req.user);
  }
  @ApiTags('Auth')
  @Post('broker/signup')
  async signupBroker(@Body() broker: CreateBrokerDto) {
    return await this.authService.createBroker(broker);
  }
}
