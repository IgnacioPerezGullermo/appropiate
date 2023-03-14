import { MailerService } from '@nestjs-modules/mailer';
import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Mailer')
@Controller('mailer')
export class MailerController {
  constructor(private mailerService: MailerService) {}

  @Get('example-email')
  async exampleEmail(@Query('toemail') toEmail: string) {
    const res = await this.mailerService.sendMail({
      to: toEmail,
      from: 'nacho71197@gmail.com',
      subject: 'Example email',
      text: 'This is an Example E-mail',
    });
    return res;
  }

  @Get('verify-account')
  async verificationEmail(
    @Query('toemail') toEmail: string,
    @Query('userId') userId: string,
  ) {
    const res = await this.mailerService.sendMail({
      to: toEmail,
      from: 'nacho71197@gmail.com',
      subject: 'Verifica tu cuenta',
      text: `Para proceder, ingresa al siguiente link para verificar tu cuenta: http://localhost:5173/verification?id=${userId}`,
    });
    return res;
  }
}
