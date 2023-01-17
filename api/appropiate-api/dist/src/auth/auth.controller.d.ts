import { CreateBrokerDto } from 'src/brokers/dto/create-broker.dto';
import { CreateUserDto } from 'src/clients/dto/create-user.dto';
import { Admin } from 'src/clients/entities/admin.entity';
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
    loginBroker(req: any): Promise<{
        broker: any;
        token: string;
    }>;
    signupBroker(broker: CreateBrokerDto): Promise<{
        broker: any;
        token: string;
    }>;
}
