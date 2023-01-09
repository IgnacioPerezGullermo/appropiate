import { Model } from 'sequelize-typescript';
import { Appointment } from 'src/appointment/entities/appointment.entity';
export declare class Broker extends Model {
    name: string;
    email: string;
    appointment: Appointment[];
    type: string;
    tel: number;
}
