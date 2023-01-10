import { BrokersService } from './brokers.service';
import { CreateBrokerDto } from './dto/create-broker.dto';
import { UpdateBrokerDto } from './dto/update-broker.dto';
export declare class BrokersController {
    private readonly brokersService;
    constructor(brokersService: BrokersService);
    create(createBrokerDto: CreateBrokerDto): Promise<void>;
    findAll(): Promise<import("./entities/broker.entity").Broker[]>;
    findOne(id: string): Promise<import("./entities/broker.entity").Broker>;
    update(id: string, updateBrokerDto: UpdateBrokerDto): Promise<void>;
    remove(id: string): string;
}
