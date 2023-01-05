import { Injectable } from '@nestjs/common';
import { CreatePropiertyDto } from './dto/create-propierty.dto';
import { UpdatePropiertyDto } from './dto/update-propierty.dto';

@Injectable()
export class PropiertiesService {
  create(createPropiertyDto: CreatePropiertyDto) {
    return 'This action adds a new propierty';
  }

  findAll() {
    return `This action returns all propierties`;
  }

  findOne(id: number) {
    return `This action returns a #${id} propierty`;
  }

  update(id: number, updatePropiertyDto: UpdatePropiertyDto) {
    return `This action updates a #${id} propierty`;
  }

  remove(id: number) {
    return `This action removes a #${id} propierty`;
  }
}
