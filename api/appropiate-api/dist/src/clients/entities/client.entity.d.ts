import { Model } from 'sequelize-typescript';
import { User } from 'src/users/entities/user.entity';
export declare class Client extends Model {
    id: string;
    lastName: string;
    firstName: string;
    ageRange: string;
    basicIncome: number;
    profilePicture: string;
    user: User[];
    userId: string;
}
