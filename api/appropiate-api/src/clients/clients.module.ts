import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ClientsController } from './clients.controller';
import { clientProviders } from './clients.providers';
import { ClientsService } from './clients.service';

@Module({
  imports: [DatabaseModule],
  providers: [ClientsService, ...clientProviders],
  controllers: [ClientsController],
  exports: [ClientsService],
})
export class ClientsModule {}
