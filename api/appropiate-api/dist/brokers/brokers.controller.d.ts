import { BrokersService } from './brokers.service';
import { CreateBrokerDto } from './dto/create-broker.dto';
import { UpdateBrokerDto } from './dto/update-broker.dto';
export declare class BrokersController {
    private readonly brokersService;
    constructor(brokersService: BrokersService);
    create(createBrokerDto: CreateBrokerDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateBrokerDto: UpdateBrokerDto): string;
    remove(id: string): string;
}
