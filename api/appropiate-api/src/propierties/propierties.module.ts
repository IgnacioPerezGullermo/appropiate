import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { PropiertiesService } from './propierties.service';
import { propiertiesProviders } from './propierties.provider';
import { PropiertiesController } from './propierties.controller';

@Module({
  imports: [DatabaseModule],
  providers: [PropiertiesService, ...propiertiesProviders],
  controllers: [PropiertiesController],
  exports: [PropiertiesService],
})
export class PropiertiesModule {}
