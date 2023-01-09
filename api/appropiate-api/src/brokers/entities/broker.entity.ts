import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Appointment } from 'src/appointment/entities/appointment.entity';
@Table
export class Broker extends Model {
  @Column
  name: string;

  @Column
  email: string;

  @HasMany(() => Appointment)
  appointment: Appointment[];

  @Column
  type: string;

  @Column
  tel: number;
}
