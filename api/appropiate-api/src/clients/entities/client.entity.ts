import {
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Appointment } from 'src/appointment/entities/appointment.entity';
import { AgeRange } from './agerange.entity';

@Table
export class Client extends Model {
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

  @HasMany(() => Appointment)
  appointment: Appointment[];

  @ForeignKey(() => AgeRange)
  AgeRangeId: string;
}
