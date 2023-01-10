import { Module } from '@nestjs/common';
import { ClientsModule } from './clients/clients.module';
import { databaseProviders } from './database/database.providers';
import { BrokersModule } from './brokers/brokers.module';
import { PropiertiesModule } from './propierties/propierties.module';
import { PostsModule } from './posts/posts.module';
import { AppointmentModule } from './appointment/appointment.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ClientsModule,
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
