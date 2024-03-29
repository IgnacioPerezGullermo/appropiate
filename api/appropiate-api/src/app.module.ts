import { Module } from '@nestjs/common';
import { AppointmentModule } from './appointment/appointment.module';
import { AuthModule } from './auth/auth.module';
import { BrokersModule } from './brokers/brokers.module';
import { ClientModule } from './clients/clients.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { MailModule } from './mail/mail.module';
import { PostsModule } from './posts/posts.module';
import { PropiertiesModule } from './propierties/propierties.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ClientModule,
    BrokersModule,
    PropiertiesModule,
    PostsModule,
    AppointmentModule,
    AuthModule,
    UsersModule,
    CloudinaryModule,
    MailModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
