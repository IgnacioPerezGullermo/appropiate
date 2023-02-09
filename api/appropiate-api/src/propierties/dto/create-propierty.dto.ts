import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePropiertyDto {
  @ApiProperty()
  @IsString()
  readonly price: string;

  @ApiProperty()
  @IsString()
  readonly region: string;

  @ApiProperty()
  @IsString()
  readonly commune: string;

  @ApiProperty()
  @IsString()
  readonly bedr: string;

  @ApiProperty()
  @IsString()
  readonly bath: string;

  @ApiProperty()
  @IsString()
  readonly storage: string;

  @ApiProperty()
  @IsString()
  readonly parking: string;

  @ApiProperty()
  @IsString()
  readonly caprate: string;

  @ApiProperty()
  @IsString()
  readonly totalarea: string;

  @ApiProperty()
  @IsString()
  readonly deliverytype: string;

  @ApiProperty()
  @IsString()
  readonly inmob: string;

  @ApiProperty()
  @IsString()
  readonly projectname: string;

  @ApiProperty()
  @IsString()
  readonly stock: string;
}
