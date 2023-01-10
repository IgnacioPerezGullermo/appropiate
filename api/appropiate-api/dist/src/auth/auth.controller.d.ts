import { CreateClientDto } from 'src/clients/dto/create-client.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        client: any;
        token: string;
    }>;
    signup(client: CreateClientDto): Promise<{
        user: any;
        token: string;
    }>;
}
