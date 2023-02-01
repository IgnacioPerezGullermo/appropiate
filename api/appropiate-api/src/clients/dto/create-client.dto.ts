import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

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
  readonly ageRange: string;

  @ApiProperty()
  @IsString()
  readonly basicIncome?: number;

  @ApiProperty()
  @IsString()
  readonly profilePicture?: string;

  @ApiProperty()
  @IsString()
  readonly userId?: string;
}
