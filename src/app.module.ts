import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ArticuloModule } from './articulo/articulo.module';
import { MovArticuloModule } from './mov-articulo/mov-articulo.module';
import { TipoOperacionModule } from './tipo-operacion/tipo-operacion.module';
import { HistoricoTransaccionesModule } from './historico-transacciones/historico-transacciones.module';
import { AlmacenModule } from './almacen/almacen.module';
import { ArticuloDataModule } from './articulo-data/articulo-data.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb+srv://admin:9ij7YboUymy9ymmb@inventarysystem.qleugcs.mongodb.net/'),
    ArticuloModule,
    MovArticuloModule,
    TipoOperacionModule,
    HistoricoTransaccionesModule,
    AlmacenModule,
    ArticuloDataModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
