import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MovArticuloService } from './mov-articulo.service';
import { CreateMovArticuloDto } from './dto/create-mov-articulo.dto';
import { UpdateMovArticuloDto } from './dto/update-mov-articulo.dto';

@Controller('mov-articulo')
export class MovArticuloController {
  constructor(private readonly movArticuloService: MovArticuloService) {}

  @Post(':tipoOperacion')
  create(@Param('tipoOperacion') tipoOperacion:string,@Body() createMovArticuloDto: CreateMovArticuloDto) {
    return this.movArticuloService.create(createMovArticuloDto,tipoOperacion);
  }

  @Get()
  findAll() {
    return this.movArticuloService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.movArticuloService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMovArticuloDto: UpdateMovArticuloDto) {
    return this.movArticuloService.update(+id, updateMovArticuloDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.movArticuloService.remove(+id);
  }
}
