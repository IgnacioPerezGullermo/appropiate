import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';
export declare class ClientsService {
    private clientRepository;
    constructor(clientRepository: typeof Client);
    create(createClientDto: CreateClientDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateClientDto: UpdateClientDto): string;
    remove(id: number): string;
}
