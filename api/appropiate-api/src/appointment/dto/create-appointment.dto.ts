import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { IsBefore, IsDate } from 'sequelize-typescript';
import { Broker } from 'src/brokers/entities/broker.entity';
import { Client } from 'src/clients/entities/client.entity';

const currentTime = Date.now();
const today = new Date(currentTime);
export class CreateAppointmentDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @ApiProperty()
  readonly date: Date;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly brokerId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly clientId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly type: string;
}
