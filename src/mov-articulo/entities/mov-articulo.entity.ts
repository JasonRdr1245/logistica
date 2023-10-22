import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Almacen } from "src/almacen/entities/almacen.entity";
import { Articulo } from "src/articulo/entities/articulo.entity";
import { TipoOperacion } from "src/tipo-operacion/entities/tipo-operacion.entity";

@Schema()
export class MovArticulo {
    @Prop({required:true})
    fecha: Date;
    @Prop({required:true})
    numeroDoc: String;
    @Prop({required:true})
    cantidad:Number;
    @Prop({required:true})
    indicadorEstado:String;
    @Prop({type:mongoose.Schema.Types.ObjectId,ref:'Articulo',required:true})
    articulo:Articulo;
    @Prop({type:mongoose.Schema.Types.ObjectId,ref:'Almacen',required:false})
    almacenOrigen?:Almacen;
    @Prop({type:mongoose.Schema.Types.ObjectId,ref:'Almacen',required:false})
    almacenDestino?:Almacen;
    @Prop({type:mongoose.Schema.Types.ObjectId,ref:'TipoOperacion',required:true})
    tipoOperacion:TipoOperacion;
}

export const MovArticuloSchema= SchemaFactory.createForClass(MovArticulo)
