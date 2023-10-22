import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Articulo } from '../../articulo/entities/articulo.entity';
import mongoose from "mongoose";
import { ArticuloDatum } from "src/articulo-data/entities/articulo-datum.entity";

@Schema()
export class Almacen {
    @Prop()
    descripcion:String;
    @Prop()
    direccion:String;
    @Prop()
    telefono:String;
    @Prop({type:[{type:mongoose.Schema.Types.ObjectId,ref:'ArticuloDatum'}]})
    articulos:ArticuloDatum[]
}

export const AlmacenSchema=SchemaFactory.createForClass(Almacen);
