import { CreatePropiertyDto } from './dto/create-propierty.dto';
import { UpdatePropiertyDto } from './dto/update-propierty.dto';
export declare class PropiertiesService {
    create(createPropiertyDto: CreatePropiertyDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePropiertyDto: UpdatePropiertyDto): string;
    remove(id: number): string;
}
