import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { CreateBrokerDto } from './create-broker.dto';

export class UpdateBrokerDto extends PartialType(CreateBrokerDto) {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly lastName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Length(8, 20)
  readonly firstName: string;

  @ApiProperty()
  @IsString()
  readonly profilePicture: string;
}
