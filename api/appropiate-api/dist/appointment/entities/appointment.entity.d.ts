import { Model } from 'sequelize-typescript';
import { Broker } from 'src/brokers/entities/broker.entity';
export declare class Appointment extends Model {
    title: string;
    date: string;
    broker: Broker[];
    client: string;
    type: string;
}
