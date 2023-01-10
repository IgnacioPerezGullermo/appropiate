import { JwtService } from '@nestjs/jwt';
import { ClientsService } from 'src/clients/clients.service';
export declare class AuthService {
    private readonly clientService;
    private readonly jwtService;
    constructor(clientService: ClientsService, jwtService: JwtService);
    validateUser(username: string, pass: string): Promise<any>;
    login(client: any): Promise<{
        client: any;
        token: string;
    }>;
    create(client: any): Promise<{
        user: any;
        token: string;
    }>;
    private generateToken;
    private hashPassword;
    private comparePassword;
}
