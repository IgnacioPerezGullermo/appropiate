import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
} from 'class-validator';

export class CreateClientDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly lastName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly firstName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly age: number;

  @ApiProperty()
  @IsString()
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

  @ApiProperty()
  @IsString()
  readonly userId?: string;
}
