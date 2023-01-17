import { Model } from 'sequelize-typescript';
import { Appointment } from '../../appointment/entities/appointment.entity';
export declare class Broker extends Model {
    id: string;
    username: string;
    email: string;
    password: string;
    type: string;
    tel: string;
    appointment: Appointment[];
}
