import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ClientController } from './clients.controller';
import { clientsProviders } from './clients.providers';
import { ClientsService } from './clients.service';

@Module({
  imports: [DatabaseModule],
  providers: [ClientsService, ...clientsProviders],
  controllers: [ClientController],
  exports: [ClientsService],
})
export class ClientModule {}
