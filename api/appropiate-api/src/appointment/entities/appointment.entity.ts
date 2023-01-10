import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Broker } from 'src/brokers/entities/broker.entity';
import { Client } from 'src/clients/entities/client.entity';

@Table
export class Appointment extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column
  title: string;

  @Column
  date: Date;

  @BelongsTo(() => Broker)
  broker: Broker;

  @ForeignKey(() => Broker)
  @Column({ type: DataType.UUID, field: 'broker_id' })
  brokerId: string;

  @BelongsTo(() => Client)
  client: Client;

  @ForeignKey(() => Client)
  @Column({ type: DataType.UUID, field: 'client_id' })
  clientId: string;

  @Column
  type: string;
}
