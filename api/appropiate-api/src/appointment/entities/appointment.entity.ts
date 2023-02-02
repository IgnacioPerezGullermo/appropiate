import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  HasOne,
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
  date: string;

  @Column
  startsAt: string;

  @BelongsTo(() => Client)
  Client: Client[];

  @ForeignKey(() => Client)
  @Column({ type: DataType.UUID, field: 'client_id' })
  clientId: string;

  @BelongsTo(() => Broker)
  Broker: Broker[];

  @ForeignKey(() => Broker)
  @Column({ type: DataType.UUID, field: 'broker_id' })
  brokerId: string;

  @Column
  type: string;

  @Column
  description: string;

  @Column
  googleId: string;
}
