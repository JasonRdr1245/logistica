import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateArticuloDto } from './dto/create-articulo.dto';
import { UpdateArticuloDto } from './dto/update-articulo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Articulo } from './entities/articulo.entity';
import { Model } from 'mongoose';

@Injectable()
export class ArticuloService {

  constructor(@InjectModel(Articulo.name) private articuloModel:Model<Articulo>){}

  async create(createArticuloDto: CreateArticuloDto):Promise<Articulo> {
    try{
      const newArticulo=new this.articuloModel(createArticuloDto)
      return await newArticulo.save()
    }catch(error){
      throw new BadRequestException('uno de los datos esta mal mandado')
    }
  }

  async findAll() {
    try{
      return await this.articuloModel.find()
    }catch(error){
      throw new Error('HA ocurrido un error')
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} articulo`;
  }

  update(id: number, updateArticuloDto: UpdateArticuloDto) {
    return `This action updates a #${id} articulo`;
  }

  remove(id: number) {
    return `This action removes a #${id} articulo`;
  }
}
