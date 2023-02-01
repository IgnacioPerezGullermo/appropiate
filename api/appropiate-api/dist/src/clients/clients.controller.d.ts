import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
export declare class ClientController {
    private readonly clientService;
    constructor(clientService: ClientsService);
    create(createUserDto: CreateClientDto): Promise<import("./entities/client.entity").Client>;
    findAll(): Promise<import("./entities/client.entity").Client[]>;
    findAllByType(type: string): Promise<import("./entities/client.entity").Client[]>;
    findOne(id: string): Promise<import("./entities/client.entity").Client>;
    findByUser(username: string): Promise<import("./entities/client.entity").Client>;
    update(id: string, updateClientDto: UpdateClientDto): Promise<void>;
    remove(id: string): Promise<number>;
}
