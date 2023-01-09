import { Table, Column, Model, BelongsTo } from 'sequelize-typescript';
import { Broker } from 'src/brokers/entities/broker.entity';
import { Client } from 'src/clients/entities/client.entity';

@Table
export class Appointment extends Model {
  @Column
  title: string;

  @Column
  date: string;

  @BelongsTo(() => Broker)
  broker: Broker[];

  @BelongsTo(() => Client)
  client: Client[];

  @Column
  type: string;
}
