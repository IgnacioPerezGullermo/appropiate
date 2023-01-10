import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';
export declare class ClientsService {
    private readonly clientRepository;
    constructor(clientRepository: typeof Client);
    create(createClientDto: CreateClientDto): Promise<Client>;
    findAll(): Promise<Client[]>;
    findById(id: string): Promise<Client>;
    findOneByUsername(username: string): Promise<Client>;
    update(id: string, updateClientDto: UpdateClientDto): Promise<void>;
    remove(id: string): string;
}
