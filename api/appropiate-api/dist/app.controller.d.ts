import { AppService, ClientService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
}
export declare class ClientController {
    private readonly clientService;
    constructor(clientService: ClientService);
    findAll(): string;
    addClient(): string;
    editClient(): string;
    removeClient(): string;
}
