import { Module } from '@nestjs/common';
import { ClientsModule } from './clients/clients.module';
import { databaseProviders } from './database/database.providers';
import { BrokersModule } from './brokers/brokers.module';
import { PropiertiesModule } from './propierties/propierties.module';
import { PostsModule } from './posts/posts.module';
import { AppointmentModule } from './appointment/appointment.module';

@Module({
  imports: [ClientsModule, BrokersModule, PropiertiesModule, PostsModule, AppointmentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
