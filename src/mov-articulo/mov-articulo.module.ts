import { Module } from '@nestjs/common';
import { MovArticuloService } from './mov-articulo.service';
import { MovArticuloController } from './mov-articulo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Articulo,
  ArticuloSchema,
} from 'src/articulo/entities/articulo.entity';
import { MovArticulo, MovArticuloSchema } from './entities/mov-articulo.entity';
import { AlmacenModule } from 'src/almacen/almacen.module';

@Module({
  imports: [
    AlmacenModule,
    MongooseModule.forFeature([
      { name: MovArticulo.name, schema: MovArticuloSchema },
    ]),
  ],
  controllers: [MovArticuloController],
  providers: [MovArticuloService],
})
export class MovArticuloModule {}
