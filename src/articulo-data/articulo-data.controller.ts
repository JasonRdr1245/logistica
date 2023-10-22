import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArticuloDataService } from './articulo-data.service';
import { CreateArticuloDatumDto } from './dto/create-articulo-datum.dto';
import { UpdateArticuloDatumDto } from './dto/update-articulo-datum.dto';

@Controller('articulo-data')
export class ArticuloDataController {
  constructor(private readonly articuloDataService: ArticuloDataService) {}

  @Post()
  create(@Body() createArticuloDatumDto: CreateArticuloDatumDto) {
    return this.articuloDataService.create(createArticuloDatumDto);
  }

  @Get()
  findAll() {
    return this.articuloDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articuloDataService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticuloDatumDto: UpdateArticuloDatumDto) {
    return this.articuloDataService.update(id, updateArticuloDatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articuloDataService.remove(+id);
  }
}
