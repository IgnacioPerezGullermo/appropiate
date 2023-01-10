import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateBrokerDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  readonly date: Date;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Length(8, 20)
  readonly password: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  readonly type?: string;

  @ApiProperty()
  @IsNumber()
  @Length(10)
  readonly tel: number;
}
