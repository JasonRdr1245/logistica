import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class TipoOperacion {
    @Prop({required:true})
    tipoMov:String;
    @Prop({required:true})
    descripcionMov:String;
}
export const TipoOperacionSchema=SchemaFactory.createForClass(TipoOperacion)
