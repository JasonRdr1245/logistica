import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAlmacenDto } from './dto/create-almacen.dto';
import { UpdateAlmacenDto } from './dto/update-almacen.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Almacen } from './entities/almacen.entity';
import { Model } from 'mongoose';
import { Articulo } from 'src/articulo/entities/articulo.entity';
import { ArticuloDataService } from 'src/articulo-data/articulo-data.service';
import { CreateArticuloDatumDto } from '../articulo-data/dto/create-articulo-datum.dto';
import { UpdateArticuloDatumDto } from 'src/articulo-data/dto/update-articulo-datum.dto';

@Injectable()
export class AlmacenService {
  constructor(
    @InjectModel(Almacen.name) private almacenModel: Model<Almacen>,
    private readonly articuloDataService: ArticuloDataService,
  ) {}
  async create(createAlmacenDto: CreateAlmacenDto) {
    const articulos: Articulo[] = [];
    const newAlmacen = new this.almacenModel(createAlmacenDto, articulos);
    return await newAlmacen.save();
  }

  async findAll() {
    return await this.almacenModel.find();
  }

  async ingresar(id: string, updateAlmacenDto: UpdateAlmacenDto) {
    try {
      const almacenAct = await this.almacenModel.findById(id);
      if (!almacenAct) {
        throw new BadRequestException('el almacen no existe');
      }
      const { articulos, ...obejct } = almacenAct;
      for (const articuloDat of articulos) {
        const articuloData = await this.articuloDataService.findOne(
          articuloDat._id,
        );
        if (articuloData.articulo._id == updateAlmacenDto.articuloId) {
          const cantidad = articuloData.cantidad + updateAlmacenDto.cantidad;
          const Updatearti: UpdateArticuloDatumDto = {
            cantidad,
          };
          const artDataActualizado = await this.articuloDataService.update(
            articuloData._id,
            Updatearti,
          );
          return await this.almacenModel
            .findById(id)
            .populate('articulos')
            .exec();
        }
      }
      const articulo = updateAlmacenDto.articuloId;
      const createArticuloDtumDto: CreateArticuloDatumDto = {
        articulo,
        cantidad: updateAlmacenDto.cantidad,
      };
      const newArticuloData = await this.articuloDataService.create(
        createArticuloDtumDto,
      );
      almacenAct.articulos.push(newArticuloData);
      return await almacenAct.save();
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async salida(id: string, updateAlmacenDto: UpdateAlmacenDto) {
    try {
      const almacenAct = await this.almacenModel.findById(id);
      if (!almacenAct) {
        throw new BadRequestException('El almacén no existe');
      }

      const { articulos, ...object } = almacenAct;

      for (const articuloDat of articulos) {
        const articuloData = await this.articuloDataService.findOne(
          articuloDat._id,
        );
        if (articuloData.articulo._id == updateAlmacenDto.articuloId) {
          // Verificar si hay suficientes existencias para la salida
          if (articuloData.cantidad >= updateAlmacenDto.cantidad) {
            // Actualizar la cantidad en el artículo
            const cantidad = articuloData.cantidad - updateAlmacenDto.cantidad;
            const updateArticuloDataDto: UpdateArticuloDatumDto = {
              cantidad,
            };

            // Actualizar el artículo con la nueva información
            const updatedArticuloData = await this.articuloDataService.update(
              articuloData._id,
              updateArticuloDataDto,
            );

            // Actualizar el almacén con la nueva información
            almacenAct.articulos = articulos;

            // Guardar los cambios en el almacén en la base de datos
            return await this.almacenModel
            .findById(id)
            .populate('articulos')
            .exec();
          } else {
            throw new BadRequestException(
              'Cantidad insuficiente en el almacén para la salida',
            );
          }
        }
      }

      throw new BadRequestException('El artículo no existe en el almacén');
    } catch (error) {
      throw new BadRequestException('Revise los datos que desea enviar');
    }
  }
}
