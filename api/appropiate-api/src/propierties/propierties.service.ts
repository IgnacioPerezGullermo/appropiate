import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Op } from 'sequelize';
import { PROPIERTY_REPOSITORY } from '../../core/constants';
import { CreatePropiertyDto } from './dto/create-propierty.dto';
import { UpdatePropiertyDto } from './dto/update-propierty.dto';
import { Propierty } from './entities/propierty.entity';

@Injectable()
export class PropiertiesService {
  constructor(
    @Inject(PROPIERTY_REPOSITORY)
    private readonly propiertiesRepository: typeof Propierty,
  ) {}

  async create(createPropiertyDto: CreatePropiertyDto) {
    try {
      const propierty = new Propierty();
      propierty.price = createPropiertyDto.price;
      propierty.region = createPropiertyDto.region;
      propierty.commune = createPropiertyDto.commune;
      propierty.bedr = createPropiertyDto.bedr;
      propierty.bath = createPropiertyDto.bath;
      propierty.storage = createPropiertyDto.storage;
      propierty.parking = createPropiertyDto.parking;
      propierty.caprate = createPropiertyDto.caprate;
      propierty.totalarea = createPropiertyDto.totalarea;
      propierty.deliverytype = createPropiertyDto.deliverytype;
      propierty.inmob = createPropiertyDto.inmob;
      propierty.projectname = createPropiertyDto.projectname;
      propierty.stock = createPropiertyDto.stock;

      console.log(createPropiertyDto, propierty);
      const propiertyData = await propierty.save();
      return propiertyData;
    } catch (error) {
      console.log(error);
      if (error.code === 11000) {
        //si consologeamos el error nos va a mostrar tanto la propiedad code, como la propiedad keyValue
        throw new BadRequestException(
          `User exist in db ${JSON.stringify(error.keyValue)}`,
        );
      }
      console.log(error);
      throw new InternalServerErrorException(
        `Can't create Propierty - check server logs`,
      );
    }
  }

  async find({
    page,
    pageSize,
  }): Promise<{ total: number; data: Propierty[] }> {
    const offset = page * pageSize;
    const limit = pageSize;
    console.log(offset, limit);
    const { rows, count } =
      await this.propiertiesRepository.findAndCountAll<Propierty>({
        limit,
        offset,
      });
    console.log(rows);
    return { total: count, data: rows };
  }

  async findSearched({
    page,
    pageSize,
    projectname,
  }): Promise<{ total: number; data: Propierty[] }> {
    const offset = page * pageSize;
    const limit = pageSize;
    const { rows, count } =
      await this.propiertiesRepository.findAndCountAll<Propierty>({
        limit,
        offset,
        where: { projectname: { [Op.like]: '%' + projectname + '%' } },
      });
    console.log(rows);
    return { total: count, data: rows };
  }

  async findOne(id: string) {
    return await this.propiertiesRepository.findOne({ where: { id } });
  }

  update(id: number, updatePropiertyDto: UpdatePropiertyDto) {
    return `This action updates a #${id} propierty`;
  }

  remove(id: number) {
    return `This action removes a #${id} propierty`;
  }
}
