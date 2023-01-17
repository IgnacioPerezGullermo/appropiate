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
  readonly username?: string;

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
  @Length(12)
  readonly tel?: string;
}
