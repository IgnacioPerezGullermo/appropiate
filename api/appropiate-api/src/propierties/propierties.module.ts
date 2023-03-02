import { Module } from '@nestjs/common';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';
import { DatabaseModule } from 'src/database/database.module';
import { PropiertiesController } from './propierties.controller';
import { propiertiesProviders } from './propierties.provider';
import { PropiertiesService } from './propierties.service';

@Module({
  imports: [DatabaseModule, CloudinaryModule],
  providers: [PropiertiesService, ...propiertiesProviders],
  controllers: [PropiertiesController],
  exports: [PropiertiesService],
})
export class PropiertiesModule {}
