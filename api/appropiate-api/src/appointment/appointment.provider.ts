import { APPOINTMENT_REPOSITORY } from '../../core/constants';
import { Appointment } from './entities/appointment.entity';

export const AppointmentProviders = [
  {
    provide: APPOINTMENT_REPOSITORY,
    useValue: Appointment,
  },
];
