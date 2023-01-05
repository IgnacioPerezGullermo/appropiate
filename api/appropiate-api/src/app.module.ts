import { Module } from '@nestjs/common';
import { ClientsModule } from './clients/clients.module';
import { databaseProviders } from './database/database.providers';
import { BrokersModule } from './brokers/brokers.module';
import { PropiertiesModule } from './propierties/propierties.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [ClientsModule, BrokersModule, PropiertiesModule, PostsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
