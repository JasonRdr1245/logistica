import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoOperacionService } from './tipo-operacion.service';
import { CreateTipoOperacionDto } from './dto/create-tipo-operacion.dto';
import { UpdateTipoOperacionDto } from './dto/update-tipo-operacion.dto';

@Controller('tipo-operacion')
export class TipoOperacionController {
  constructor(private readonly tipoOperacionService: TipoOperacionService) {}

  @Post()
  create(@Body() createTipoOperacionDto: CreateTipoOperacionDto) {
    return this.tipoOperacionService.create(createTipoOperacionDto);
  }

  @Get()
  findAll() {
    return this.tipoOperacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoOperacionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoOperacionDto: UpdateTipoOperacionDto) {
    return this.tipoOperacionService.update(+id, updateTipoOperacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoOperacionService.remove(+id);
  }
}
