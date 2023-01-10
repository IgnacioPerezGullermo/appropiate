import {
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Col } from 'sequelize/types/utils';
import { Appointment } from '../../appointment/entities/appointment.entity';
@Table
export class Broker extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column
  name: string;

  @Column
  email: string;

  @Column
  password: string;

  @Column
  type: string;

  @Column
  tel: number;

  @HasMany(() => Appointment)
  appointment: Appointment[];
}
