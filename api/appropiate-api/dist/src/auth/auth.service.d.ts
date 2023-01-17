import { JwtService } from '@nestjs/jwt';
import { BrokersService } from 'src/brokers/brokers.service';
import { UserService } from 'src/clients/user.service';
export declare class AuthService {
    private readonly brokerService;
    private readonly userService;
    private readonly jwtService;
    constructor(brokerService: BrokersService, userService: UserService, jwtService: JwtService);
    validateUser(username: string, pass: string): Promise<any>;
    validateBroker(username: string, pass: string): Promise<any>;
    loginClient(client: any): Promise<{
        client: any;
        token: string;
    }>;
    loginBroker(broker: any): Promise<{
        broker: any;
        token: string;
    }>;
    loginAdmin(admin: any): Promise<{
        msg: string;
    }>;
    createClient(client: any): Promise<{
        user: any;
        token: string;
    }>;
    createBroker(broker: any): Promise<{
        broker: any;
        token: string;
    }>;
    private generateToken;
    private hashPassword;
    private comparePassword;
}
