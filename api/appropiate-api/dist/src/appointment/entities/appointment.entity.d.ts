import { Model } from 'sequelize-typescript';
import { Broker } from 'src/brokers/entities/broker.entity';
import { Client } from 'src/clients/entities/client.entity';
export declare class Appointment extends Model {
    id: string;
    title: string;
    date: string;
    startsAt: string;
    Client: Client[];
    clientId: string;
    Broker: Broker[];
    brokerId: string;
    type: string;
    description: string;
    googleId: string;
}
