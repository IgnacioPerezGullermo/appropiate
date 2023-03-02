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
import { Propierty } from './propierty.entity';
//import { User } from 'src/users/entities/user.entity';

@Table
export class Images extends Model {
  @Column({
    primaryKey: true,
  })
  id: string;

  @Column
  url: string;

  @BelongsTo(() => Propierty)
  propierty: Propierty;

  @ForeignKey(() => Propierty)
  propiertyId: string;
}
