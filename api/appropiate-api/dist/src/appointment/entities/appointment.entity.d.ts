import { Model } from 'sequelize-typescript';
import { Broker } from 'src/brokers/entities/broker.entity';
import { Client } from 'src/clients/entities/client.entity';
export declare class Appointment extends Model {
    id: string;
    title: string;
    date: Date;
    broker: Broker;
    brokerId: string;
    client: Client;
    clientId: string;
    type: string;
}
