import { Module } from '@nestjs/common';
import { ArticuloService } from './articulo.service';
import { ArticuloController } from './articulo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Articulo, ArticuloSchema } from './entities/articulo.entity';

@Module({
  imports:[MongooseModule.forFeature([{name:Articulo.name,schema:ArticuloSchema}])],
  controllers: [ArticuloController],
  providers: [ArticuloService],
  exports:[ArticuloService]
})
export class ArticuloModule {}
