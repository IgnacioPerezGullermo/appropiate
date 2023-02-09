import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
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
  async findAll(
    @Query('page') page: number,
    @Query('pageSize') pageSize: number,
  ) {
    return await this.brokersService.find({ page, pageSize });
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
