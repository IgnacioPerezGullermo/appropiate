import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import {
  ApiBody,
  ApiConsumes,
  ApiCreatedResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import axios from 'axios';
import { CreatePropiertyDto } from './dto/create-propierty.dto';
import { FilesUploadDto } from './dto/files-upload.dto';
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

  @Get('find')
  @ApiCreatedResponse({
    status: 201,
    description: 'Estos son todas las propiedades solicitadas',
    type: [Propierty],
  })
  @ApiResponse({ status: 403, description: 'Error en la solicitud' })
  findAll(@Query('page') page: number, @Query('pageSize') pageSize: number) {
    return this.propiertiesService.find({ page, pageSize });
  }

  @Get('searched/:projectname')
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

  @Post('image/:id')
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'The file',
    type: FilesUploadDto,
  })
  updateImage(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.propiertiesService.addPictures(id, file);
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
