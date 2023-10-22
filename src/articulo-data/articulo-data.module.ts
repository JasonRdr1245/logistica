import { Module } from '@nestjs/common';
import { ArticuloDataService } from './articulo-data.service';
import { ArticuloDataController } from './articulo-data.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticuloDatum, ArticuloDatumSchema } from './entities/articulo-datum.entity';
import { ArticuloModule } from 'src/articulo/articulo.module';
import { Articulo, ArticuloSchema } from 'src/articulo/entities/articulo.entity';

@Module({
  imports:[
    MongooseModule.forFeature([{name:Articulo.name,schema:ArticuloSchema}]),
    MongooseModule.forFeature([{name:ArticuloDatum.name,schema:ArticuloDatumSchema}]),
],
  controllers: [ArticuloDataController],
  providers: [ArticuloDataService],
  exports:[ArticuloDataService]
})
export class ArticuloDataModule {}
