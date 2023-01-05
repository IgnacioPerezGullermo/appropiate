import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PropiertiesService } from './propierties.service';
import { CreatePropiertyDto } from './dto/create-propierty.dto';
import { UpdatePropiertyDto } from './dto/update-propierty.dto';

@Controller('propierties')
export class PropiertiesController {
  constructor(private readonly propiertiesService: PropiertiesService) {}

  @Post()
  create(@Body() createPropiertyDto: CreatePropiertyDto) {
    return this.propiertiesService.create(createPropiertyDto);
  }

  @Get()
  findAll() {
    return this.propiertiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propiertiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePropiertyDto: UpdatePropiertyDto) {
    return this.propiertiesService.update(+id, updatePropiertyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.propiertiesService.remove(+id);
  }
}
