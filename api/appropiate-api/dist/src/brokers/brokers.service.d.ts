import { CreateBrokerDto } from './dto/create-broker.dto';
import { UpdateBrokerDto } from './dto/update-broker.dto';
import { Broker } from './entities/broker.entity';
export declare class BrokersService {
    private readonly brokerRepository;
    constructor(brokerRepository: typeof Broker);
    create(CreateBrokerDto: CreateBrokerDto): Promise<void>;
    findAll(): Promise<Broker[]>;
    findOne(id: string): Promise<Broker>;
    update(id: string, updateBrokerDto: UpdateBrokerDto): Promise<void>;
    remove(id: string): string;
}