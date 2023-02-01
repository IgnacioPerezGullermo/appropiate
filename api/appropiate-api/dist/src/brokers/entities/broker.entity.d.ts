import { Model } from 'sequelize-typescript';
import { User } from 'src/users/entities/user.entity';
export declare class Broker extends Model {
    id: string;
    lastName: string;
    firstName: string;
    profilePicture: string;
    user: User[];
    userId: string;
}
