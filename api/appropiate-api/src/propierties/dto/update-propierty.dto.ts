import { PartialType } from '@nestjs/swagger';
import { CreatePropiertyDto } from './create-propierty.dto';

export class UpdatePropiertyDto extends PartialType(CreatePropiertyDto) {}
