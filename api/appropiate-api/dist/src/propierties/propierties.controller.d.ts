import { PropiertiesService } from './propierties.service';
import { CreatePropiertyDto } from './dto/create-propierty.dto';
import { UpdatePropiertyDto } from './dto/update-propierty.dto';
export declare class PropiertiesController {
    private readonly propiertiesService;
    constructor(propiertiesService: PropiertiesService);
    create(createPropiertyDto: CreatePropiertyDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePropiertyDto: UpdatePropiertyDto): string;
    remove(id: string): string;
}
