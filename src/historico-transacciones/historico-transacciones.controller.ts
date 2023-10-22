import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HistoricoTransaccionesService } from './historico-transacciones.service';
import { CreateHistoricoTransaccioneDto } from './dto/create-historico-transaccione.dto';
import { UpdateHistoricoTransaccioneDto } from './dto/update-historico-transaccione.dto';

@Controller('historico-transacciones')
export class HistoricoTransaccionesController {
  constructor(private readonly historicoTransaccionesService: HistoricoTransaccionesService) {}

  @Post()
  create(@Body() createHistoricoTransaccioneDto: CreateHistoricoTransaccioneDto) {
    return this.historicoTransaccionesService.create(createHistoricoTransaccioneDto);
  }

  @Get()
  findAll() {
    return this.historicoTransaccionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.historicoTransaccionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHistoricoTransaccioneDto: UpdateHistoricoTransaccioneDto) {
    return this.historicoTransaccionesService.update(+id, updateHistoricoTransaccioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.historicoTransaccionesService.remove(+id);
  }
}
