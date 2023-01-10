import { Model } from 'sequelize-typescript';
import { Appointment } from 'src/appointment/entities/appointment.entity';
export declare class Client extends Model {
    id: string;
    username: string;
    password: string;
    email: string;
    appointment: Appointment[];
    AgeRangeId: string;
}
