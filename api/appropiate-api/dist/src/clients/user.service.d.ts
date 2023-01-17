import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-client.dto';
import { User } from './entities/user.entity';
export declare class UserService {
    private readonly usersRepository;
    constructor(usersRepository: typeof User);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findById(id: string): Promise<User>;
    findOneByUsername(username: string): Promise<User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<void>;
    remove(id: string): Promise<number>;
}
