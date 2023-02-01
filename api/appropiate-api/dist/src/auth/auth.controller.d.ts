import { Admin } from 'src/clients/entities/admin.entity';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    loginClient(req: any): Promise<{
        client: any;
        token: string;
    }>;
    signupClient(user: CreateUserDto): Promise<{
        user: any;
        token: string;
    }>;
    loginAdmin(admin: Admin): Promise<{
        msg: string;
    }>;
}
