import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Appointment } from 'src/appointment/entities/appointment.entity';

@Table
export class Client extends Model {
  @Column({ primaryKey: true })
  id: number;

  @Column
  name: string;

  @Column
  password: string;

  @Column
  email: string;

  @HasMany(() => Appointment)
  appointment: Appointment[];
}
