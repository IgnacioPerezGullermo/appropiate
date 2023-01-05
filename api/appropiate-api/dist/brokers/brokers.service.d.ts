import { CreateBrokerDto } from './dto/create-broker.dto';
import { UpdateBrokerDto } from './dto/update-broker.dto';
export declare class BrokersService {
    create(createBrokerDto: CreateBrokerDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateBrokerDto: UpdateBrokerDto): string;
    remove(id: number): string;
}
