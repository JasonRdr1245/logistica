import { Module } from '@nestjs/common';
import { TipoOperacionService } from './tipo-operacion.service';
import { TipoOperacionController } from './tipo-operacion.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TipoOperacion, TipoOperacionSchema } from './entities/tipo-operacion.entity';

@Module({
  imports:[MongooseModule.forFeature([{name:TipoOperacion.name,schema:TipoOperacionSchema}])],
  controllers: [TipoOperacionController],
  providers: [TipoOperacionService],
})
export class TipoOperacionModule {}
