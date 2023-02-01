import { Model } from 'sequelize-typescript';
import { Broker } from 'src/brokers/entities/broker.entity';
import { Client } from 'src/clients/entities/client.entity';
export declare class User extends Model {
    id: string;
    username: string;
    password: string;
    email: string;
    client: Client[];
    clientId: string;
    broker: Broker[];
    brokerId: string;
}
