import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';
import { Broker } from 'src/brokers/entities/broker.entity';
import { Client } from 'src/clients/entities/client.entity';

@Table
export class User extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column
  username: string;

  @Column
  password: string;

  @Column
  email: string;

  @HasOne(() => Client)
  client: Client[];

  @ForeignKey(() => Client)
  clientId: string;

  @BelongsTo(() => Broker)
  broker: Broker[];

  @ForeignKey(() => Broker)
  brokerId: string;
}
