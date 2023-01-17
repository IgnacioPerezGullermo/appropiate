import { Module } from '@nestjs/common';
import { AppointmentModule } from './appointment/appointment.module';
import { AuthModule } from './auth/auth.module';
import { BrokersModule } from './brokers/brokers.module';
import { UserModule } from './clients/user.module';
import { databaseProviders } from './database/database.providers';
import { PostsModule } from './posts/posts.module';
import { PropiertiesModule } from './propierties/propierties.module';

@Module({
  imports: [
    UserModule,
    BrokersModule,
    PropiertiesModule,
    PostsModule,
    AppointmentModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
