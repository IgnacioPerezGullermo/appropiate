import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BrokersService } from './brokers.service';
import { CreateBrokerDto } from './dto/create-broker.dto';
import { UpdateBrokerDto } from './dto/update-broker.dto';

@ApiTags('Brokers')
@Controller('broker')
export class BrokersController {
  constructor(private readonly brokersService: BrokersService) {}

  @Post()
  create(@Body() createBrokerDto: CreateBrokerDto) {
    return this.brokersService.create(createBrokerDto);
  }

  @Get()
  findAll() {
    return this.brokersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.brokersService.findOne(id);
  }

  @Get(':username')
  findByUser(@Param('username') username: string) {
    return this.brokersService.findOneByUsername(username);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBrokerDto: UpdateBrokerDto) {
    return this.brokersService.update(id, updateBrokerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.brokersService.remove(id);
  }
}
