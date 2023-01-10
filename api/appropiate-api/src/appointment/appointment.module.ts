import { Module } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { AppointmentController } from './appointment.controller';
import { DatabaseModule } from 'src/database/database.module';
import { AppointmentProviders } from './appointment.provider';

@Module({
  imports: [DatabaseModule],
  providers: [AppointmentService, ...AppointmentProviders],
  controllers: [AppointmentController],
  exports: [AppointmentService],
})
export class AppointmentModule {}
