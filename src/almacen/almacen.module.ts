import { Module } from '@nestjs/common';
import { AlmacenService } from './almacen.service';
import { AlmacenController } from './almacen.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Almacen, AlmacenSchema } from './entities/almacen.entity';
import { ArticuloDataModule } from 'src/articulo-data/articulo-data.module';

@Module({
  imports:[ArticuloDataModule,MongooseModule.forFeature([{name:Almacen.name,schema:AlmacenSchema}])],
  controllers: [AlmacenController],
  providers: [AlmacenService],
  exports:[AlmacenService]
})
export class AlmacenModule {}
