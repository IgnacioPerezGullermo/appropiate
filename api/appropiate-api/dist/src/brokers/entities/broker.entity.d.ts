import { Model } from 'sequelize-typescript';
import { Appointment } from 'src/appointment/entities/appointment.entity';
export declare class Broker extends Model {
    id: string;
    name: string;
    email: string;
    password: string;
    type: string;
    tel: number;
    appointment: Appointment[];
}
