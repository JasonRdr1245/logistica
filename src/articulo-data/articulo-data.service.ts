import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateArticuloDatumDto } from './dto/create-articulo-datum.dto';
import { UpdateArticuloDatumDto } from './dto/update-articulo-datum.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ArticuloDatum } from './entities/articulo-datum.entity';
import { Model } from 'mongoose';
import { ArticuloService } from 'src/articulo/articulo.service';
import { Articulo } from 'src/articulo/entities/articulo.entity';
import { throwError } from 'rxjs';

@Injectable()
export class ArticuloDataService {
  constructor(
    @InjectModel(ArticuloDatum.name)
    private articuloDatumModel: Model<ArticuloDatum>,
    @InjectModel(Articulo.name) private readonly articuloModel: Model<Articulo>,
  ) {}
  async create(
    createArticuloDatumDto: CreateArticuloDatumDto,
  ): Promise<ArticuloDatum> {
    try {
      const { articulo, ...object } = createArticuloDatumDto;
      const actuallyArticle = await this.articuloModel.findById(articulo);

      if (!actuallyArticle) {
        throw new BadRequestException('el id no es encontrado');
      }

      const newAriticleData = new this.articuloDatumModel(
        createArticuloDatumDto,
      );
      return newAriticleData.save();
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async findAll() {
    try {
      const articulosData = await this.articuloDatumModel
        .find()
        .populate('articulo')
        .exec();
      return articulosData;
    } catch (error) {
      throw new Error('Error al obtener los datos de los artículos');
    }
  }

  async findOne(id: string) {
    try {
      return await this.articuloDatumModel.findById(id);
    } catch (error) {
      throw new Error('no hay esa id');
    }
  }

  async update(id: string, updateArticuloDatumDto: UpdateArticuloDatumDto) {
    try {
      const updatedArticulo = await this.articuloDatumModel.findByIdAndUpdate(
        id,
        updateArticuloDatumDto,
        { new: true }, // Devuelve el documento actualizado
      );
      if (!updatedArticulo) {
        throw new BadRequestException('El artículo no pudo ser actualizado');
      }
      return updatedArticulo;
    } catch (error) {
      throw new Error('Error al actualizar el artículo');
    }
  }

  remove(id: number) {
    return `This action removes a #${id} articuloDatum`;
  }
}
