import { Model } from 'sequelize-typescript';
import { Appointment } from 'src/appointment/entities/appointment.entity';
export declare class User extends Model {
    id: string;
    username: string;
    password: string;
    email: string;
    appointment: Appointment[];
    AgeRangeId: string;
    type: string;
}
