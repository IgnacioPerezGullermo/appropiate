import { Module } from '@nestjs/common';
import { BrokersService } from './brokers.service';
import { BrokersController } from './brokers.controller';

@Module({
  controllers: [BrokersController],
  providers: [BrokersService]
})
export class BrokersModule {}
