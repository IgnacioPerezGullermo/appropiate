import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { BrokersController } from './brokers.controller';
import { BrokerProviders } from './brokers.provider';
import { BrokersService } from './brokers.service';

@Module({
  imports: [DatabaseModule],
  providers: [BrokersService, ...BrokerProviders],
  controllers: [BrokersController],
  exports: [BrokersService],
})
export class BrokersModule {}
