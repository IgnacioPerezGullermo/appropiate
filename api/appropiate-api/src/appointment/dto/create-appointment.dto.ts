import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

// const currentTime = Date.now();
// const today = new Date(currentTime);
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
