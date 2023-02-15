import {
  Column,
  DataType,
  ForeignKey,
  HasMany,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/users/entities/user.entity';

@Table
export class Client extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column
  lastName: string;

  @Column
  firstName: string;

  @Column
  age: number;

  @Column
  basicIncome: number;

  @Column
  currentSavings: number;

  @Column
  bankCredit: number;

  @Column
  profilePicture: string;

  @HasOne(() => User)
  user: User[];

  @ForeignKey(() => User)
  userId: string;
}
