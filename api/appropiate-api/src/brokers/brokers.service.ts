import { Injectable } from '@nestjs/common';
import { CreateBrokerDto } from './dto/create-broker.dto';
import { UpdateBrokerDto } from './dto/update-broker.dto';

@Injectable()
export class BrokersService {
  create(createBrokerDto: CreateBrokerDto) {
    return 'This action adds a new broker';
  }

  findAll() {
    return `This action returns all brokers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} broker`;
  }

  update(id: number, updateBrokerDto: UpdateBrokerDto) {
    return `This action updates a #${id} broker`;
  }

  remove(id: number) {
    return `This action removes a #${id} broker`;
  }
}
