import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateAppointmentDto } from './create-appointment.dto';

export class UpdateAppointmentDto extends PartialType(CreateAppointmentDto) {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly title?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly description?: string;

  @ApiProperty()
  readonly date?: string;

  @ApiProperty()
  readonly starstAt?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly type?: string;
}
