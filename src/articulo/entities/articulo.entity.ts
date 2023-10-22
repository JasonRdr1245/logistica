import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Articulo {
  _id?:string;
  @Prop({required:true})
  descripcion: String;
  @Prop({required:true})
  unidad: String;
  @Prop({required:true})
  saldoInicial: String;
  @Prop({default:true})
  isIgvArticle: Boolean;
  @Prop({default:true})
  precioVenta: Number;
  @Prop({required:true})
  puntoReorden: Number;
  @Prop({required:true})
  tasaEspecialIgv: Number;
}

export const  ArticuloSchema= SchemaFactory.createForClass(Articulo)