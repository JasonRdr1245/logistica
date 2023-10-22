import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { MovArticulo } from "src/mov-articulo/entities/mov-articulo.entity";

@Schema()
export class HistoricoTransacciones {
    @Prop({type:mongoose.Schema.Types.ObjectId,ref:'MovArticulo'})
    movArticulo:MovArticulo;
}
export const HistoricoTransaccionesSchema=SchemaFactory.createForClass(HistoricoTransacciones)

