import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AlmacenService } from './almacen.service';
import { CreateAlmacenDto } from './dto/create-almacen.dto';
import { UpdateAlmacenDto } from './dto/update-almacen.dto';

@Controller('almacen')
export class AlmacenController {
  constructor(private readonly almacenService: AlmacenService) {}

  @Post()
  create(@Body() createAlmacenDto: CreateAlmacenDto) {
    return this.almacenService.create(createAlmacenDto);
  }

  @Get()
  findAll() {
    return this.almacenService.findAll();
  }

  @Patch('ingresar/:id')
  agregarArticulo(
    @Param('id') id: string,
    @Body() UpdateAlmacenDto: UpdateAlmacenDto,
  ) {
    return this.almacenService.ingresar(id, UpdateAlmacenDto);
  }

  @Patch('salida/:id')
  salidaArticulo(
    @Param('id') id: string,
    @Body() updateAlmacenDto: UpdateAlmacenDto,
  ) {
    return this.almacenService.salida(id, updateAlmacenDto);
  }
}
