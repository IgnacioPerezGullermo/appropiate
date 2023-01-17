import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { Appointment } from './entities/appointment.entity';
export declare class AppointmentService {
    private readonly appointmentRepository;
    constructor(appointmentRepository: typeof Appointment);
    create(createAppointmentDto: CreateAppointmentDto): Promise<void>;
    findAll(): Promise<Appointment[]>;
    findOne(id: string): Promise<Appointment>;
    update(id: string, updateAppointmentDto: UpdateAppointmentDto): Promise<void>;
    remove(id: string): Promise<void>;
}
