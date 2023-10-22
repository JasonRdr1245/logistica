import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTipoOperacionDto } from './dto/create-tipo-operacion.dto';
import { UpdateTipoOperacionDto } from './dto/update-tipo-operacion.dto';
import { InjectModel } from '@nestjs/mongoose';
import { TipoOperacion } from './entities/tipo-operacion.entity';
import { Model } from 'mongoose';

@Injectable()
export class TipoOperacionService {
  constructor(
    @InjectModel(TipoOperacion.name)
    private tipoOperacionModel: Model<TipoOperacion>,
  ) {}
  async create(
    createTipoOperacionDto: CreateTipoOperacionDto,
  ): Promise<TipoOperacion> {
    try {
      const newTipoOperacion = new this.tipoOperacionModel(
        createTipoOperacionDto,
      );
      return await newTipoOperacion.save();
    } catch (error) {
      throw new BadRequestException('Algun error en el envio de datos');
    }
  }

  async findAll() {
    return await this.tipoOperacionModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoOperacion`;
  }

  update(id: number, updateTipoOperacionDto: UpdateTipoOperacionDto) {
    return `This action updates a #${id} tipoOperacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoOperacion`;
  }
}
