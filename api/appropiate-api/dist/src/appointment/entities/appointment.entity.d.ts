import { Model } from 'sequelize-typescript';
import { Broker } from 'src/brokers/entities/broker.entity';
import { User } from 'src/clients/entities/user.entity';
export declare class Appointment extends Model {
    id: string;
    title: string;
    date: string;
    startsAt: string;
    broker: Broker;
    brokerId: string;
    user: User;
    userId: string;
    type: string;
    description: string;
    googleId: string;
}
