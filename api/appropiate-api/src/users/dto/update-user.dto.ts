import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
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
  readonly brokerId?: string;

  @ApiProperty()
  @IsString()
  readonly clientId?: string;
}
