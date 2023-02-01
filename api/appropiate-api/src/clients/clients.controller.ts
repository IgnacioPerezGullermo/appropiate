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
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@ApiTags('Clients')
@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientsService) {}

  @Post()
  create(@Body() createUserDto: CreateClientDto) {
    return this.clientService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.clientService.findAll();
  }

  @Get(':type')
  findAllByType(@Param('type') type: string) {
    return this.clientService.findByType(type);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientService.findById(id);
  }

  @Get(':username')
  findByUser(@Param('username') username: string) {
    console.log(username);
    return this.clientService.findOneByUsername(username);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientService.update(id, updateClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientService.remove(id);
  }
}
