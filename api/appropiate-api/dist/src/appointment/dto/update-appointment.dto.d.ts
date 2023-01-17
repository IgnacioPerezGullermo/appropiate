import { CreateAppointmentDto } from './create-appointment.dto';
declare const UpdateAppointmentDto_base: import("@nestjs/common").Type<Partial<CreateAppointmentDto>>;
export declare class UpdateAppointmentDto extends UpdateAppointmentDto_base {
    readonly title?: string;
    readonly description?: string;
    readonly date?: string;
    readonly starstAt?: string;
    readonly type?: string;
}
export {};
