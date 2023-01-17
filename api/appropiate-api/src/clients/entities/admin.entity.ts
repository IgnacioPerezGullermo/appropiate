import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from './user.entity';

@Table
export class Admin extends Model {
  @Column
  username: string;
  @Column
  password: string;
}
