import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Articulo } from "src/articulo/entities/articulo.entity";

@Schema()
export class ArticuloDatum {
    _id?:string;
    @Prop({required:true})
    cantidad:number;
    @Prop({type:mongoose.Schema.Types.ObjectId,ref:'Articulo',required:true})
    articulo:Articulo;
}
export const ArticuloDatumSchema=SchemaFactory.createForClass(ArticuloDatum)
