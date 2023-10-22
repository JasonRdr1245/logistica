import { Module } from '@nestjs/common';
import { HistoricoTransaccionesService } from './historico-transacciones.service';
import { HistoricoTransaccionesController } from './historico-transacciones.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { HistoricoTransacciones, HistoricoTransaccionesSchema } from './entities/historico-transaccione.entity';

@Module({
  imports:[MongooseModule.forFeature([{name:HistoricoTransacciones.name,schema:HistoricoTransaccionesSchema}])],
  controllers: [HistoricoTransaccionesController],
  providers: [HistoricoTransaccionesService],
})
export class HistoricoTransaccionesModule {}
