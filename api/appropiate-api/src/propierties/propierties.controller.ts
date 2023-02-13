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
import { ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePropiertyDto } from './dto/create-propierty.dto';
import { UpdatePropiertyDto } from './dto/update-propierty.dto';
import { Propierty } from './entities/propierty.entity';
import { PropiertiesService } from './propierties.service';

@ApiTags('Propierties')
@Controller('propierties')
export class PropiertiesController {
  constructor(private readonly propiertiesService: PropiertiesService) {}

  @Post()
  @ApiCreatedResponse({
    status: 201,
    description: 'Propiedad creada con exito',
    type: [Propierty],
  })
  @ApiResponse({ status: 403, description: 'Error en la solicitud' })
  create(@Body() createPropiertyDto: CreatePropiertyDto) {
    return this.propiertiesService.create(createPropiertyDto);
  }

  @Get()
  @ApiCreatedResponse({
    status: 201,
    description: 'Estos son todas las propiedades solicitadas',
    type: [Propierty],
  })
  @ApiResponse({ status: 403, description: 'Error en la solicitud' })
  findAll(@Query('page') page: number, @Query('pageSize') pageSize: number) {
    return this.propiertiesService.find({ page, pageSize });
  }

  @Get('searched/:username')
  @ApiCreatedResponse({
    status: 201,
    description: 'Estos son las propiedades con el nombre ingresado',
    type: [Propierty],
  })
  @ApiResponse({ status: 403, description: 'Error en la solicitud' })
  search(
    @Query('page') page: number,
    @Query('pageSize') pageSize: number,
    @Param('projectname') projectname: string,
  ) {
    return this.propiertiesService.findSearched({
      page,
      pageSize,
      projectname,
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.propiertiesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePropiertyDto: UpdatePropiertyDto,
  ) {
    return this.propiertiesService.update(+id, updatePropiertyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.propiertiesService.remove(+id);
  }
}
