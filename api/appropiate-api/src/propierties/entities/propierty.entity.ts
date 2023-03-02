import {
  Column,
  DataType,
  ForeignKey,
  HasMany,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';
import { Images } from './images.entity';
//import { User } from 'src/users/entities/user.entity';

@Table
export class Propierty extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column
  price: string;

  @Column
  region: string;

  @Column
  commune: string;

  @Column
  bedr: string;

  @Column
  bath: string;

  @Column
  storage: string;

  @Column
  parking: string;

  @Column
  caprate: string;

  @Column
  totalarea: string;

  @Column
  deliverytype: string;

  @Column
  inmob: string;

  @Column
  projectname: string;

  @Column
  stock: string;

  @HasMany(() => Images)
  images: Images[];
}
