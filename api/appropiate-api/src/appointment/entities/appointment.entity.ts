import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Broker } from 'src/brokers/entities/broker.entity';
import { User } from 'src/clients/entities/user.entity';

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

  @BelongsTo(() => Broker)
  broker: Broker;

  @ForeignKey(() => Broker)
  @Column({ type: DataType.UUID, field: 'broker_id' })
  brokerId: string;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => User)
  @Column({ type: DataType.UUID, field: 'user_id' })
  userId: string;

  @Column
  type: string;

  @Column
  description: string;

  @Column
  googleId: string;
}
