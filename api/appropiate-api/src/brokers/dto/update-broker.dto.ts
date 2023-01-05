import { PartialType } from '@nestjs/swagger';
import { CreateBrokerDto } from './create-broker.dto';

export class UpdateBrokerDto extends PartialType(CreateBrokerDto) {}
