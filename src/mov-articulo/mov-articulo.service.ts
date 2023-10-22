import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateMovArticuloDto } from './dto/create-mov-articulo.dto';
import { UpdateMovArticuloDto } from './dto/update-mov-articulo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { MovArticulo } from './entities/mov-articulo.entity';
import { Model } from 'mongoose';
import { TipoOperacion } from '../tipo-operacion/entities/tipo-operacion.entity';
import { AlmacenService } from 'src/almacen/almacen.service';

@Injectable()
export class MovArticuloService {
  constructor(
    @InjectModel(MovArticulo.name) private MovArticuloModel: Model<MovArticulo>,
    private readonly almacenService: AlmacenService,
  ) {}
  async create(
    createMovArticuloDto: CreateMovArticuloDto,
    tipoOperacion: string,
  ) {
    try {
      let tipoOperacionObject;
      if (tipoOperacion == 'ingreso') {
        tipoOperacionObject = '6534c1c7df4e695a7b32b7f7';
        const updateAlmacen = {
          articuloId: createMovArticuloDto.articulo,
          cantidad: createMovArticuloDto.cantidad,
        };
        await this.almacenService.ingresar(
          createMovArticuloDto.almacenDestino,
          updateAlmacen,
        );
      } else if (tipoOperacion == 'salida') {
        tipoOperacionObject = '6534c1e5df4e695a7b32b7f9';
        const updateAlmacen = {
          articuloId: createMovArticuloDto.articulo,
          cantidad: createMovArticuloDto.cantidad,
        };
        await this.almacenService.salida(
          createMovArticuloDto.almacenOrigen,
          updateAlmacen,
        );
      } else if (tipoOperacion == 'intra-almacenes') {
        tipoOperacionObject = '6534c1f6df4e695a7b32b7fb';
        const updateAlmacen = {
          articuloId: createMovArticuloDto.articulo,
          cantidad: createMovArticuloDto.cantidad,
        };
        await Promise.all([
          this.almacenService.ingresar(
            createMovArticuloDto.almacenDestino,
            updateAlmacen,
          ),
          this.almacenService.salida(
            createMovArticuloDto.almacenOrigen,
            updateAlmacen,
          ),
        ]);
      } else {
        throw new BadRequestException('no existe esa operacion');
      }
      const fecha = new Date();
      const newMovimiento = new this.MovArticuloModel({
        ...createMovArticuloDto,
        tipoOperacion:tipoOperacionObject,
        fecha,
      });
      const savedMovimiento = await newMovimiento.save();
      // if(tipoOperacion=="ingreso"){

      // }else if(tipoOperacion=="salida"){

      // }else if(tipoOperacion=="intra-almacenes"){

      // }
      const populatedMov = await this.MovArticuloModel.findById(
        savedMovimiento._id,
      )
        .populate('articulo')
        .populate({path:'almacenOrigen',populate:{path:'articulos',populate:{path:'articulo'}}})
        .populate({path:'almacenDestino',populate:{path:'articulos',populate:{path:'articulo'}}})
        .populate('tipoOperacion')
        .exec();
      return populatedMov
    } catch (error) {
      throw new Error(error);
    }
  }

  findAll() {
    return `This action returns all movArticulo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} movArticulo`;
  }

  update(id: number, updateMovArticuloDto: UpdateMovArticuloDto) {
    return `This action updates a #${id} movArticulo`;
  }

  remove(id: number) {
    return `This action removes a #${id} movArticulo`;
  }
}
