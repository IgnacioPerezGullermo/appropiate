import { PartialType, ApiProperty } from '@nestjs/swagger';
import { CreateBrokerDto } from './create-broker.dto';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class UpdateBrokerDto extends PartialType(CreateBrokerDto) {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly name?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Length(8, 20)
  readonly password?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  readonly email?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  readonly type?: string;

  @ApiProperty()
  @IsNumber()
  @Length(10)
  readonly tel?: number;
}
