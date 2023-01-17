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
export class AgeRange extends Model {
  @Column
  title: string;
}
