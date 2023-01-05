import { Module } from '@nestjs/common';
import { PropiertiesService } from './propierties.service';
import { PropiertiesController } from './propierties.controller';

@Module({
  controllers: [PropiertiesController],
  providers: [PropiertiesService]
})
export class PropiertiesModule {}
