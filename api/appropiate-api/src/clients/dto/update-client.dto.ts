import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { CreateClientDto } from './create-client.dto';

export class UpdateClientDto extends PartialType(CreateClientDto) {
  @ApiProperty()
  @IsString()
  readonly lastName?: string;

  @ApiProperty()
  @IsString()
  readonly firstName?: string;

  @ApiProperty()
  @IsString()
  readonly age?: number;

  @ApiProperty()
  @IsNumber()
  readonly basicIncome?: number;

  @ApiProperty()
  @IsString()
  readonly profilePicture?: string;

  @ApiProperty()
  @IsNumber()
  readonly currentSavings?: number;

  @ApiProperty()
  @IsNumber()
  readonly bankCredit?: number;
}
