import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Client } from './client.entity';

@Table
export class AgeRange extends Model {
  @Column
  title: string;
}
