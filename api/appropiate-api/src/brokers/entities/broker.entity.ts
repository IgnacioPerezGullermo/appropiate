import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/users/entities/user.entity';

@Table
export class Broker extends Model {
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
  profilePicture: string;

  @BelongsTo(() => User)
  user: User[];

  @ForeignKey(() => User)
  @Column({ type: DataType.UUID, field: 'user_id' })
  userId: string;
}
