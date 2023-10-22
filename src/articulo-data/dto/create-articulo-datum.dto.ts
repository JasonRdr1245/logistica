import { IsMongoId, IsNotEmpty, IsNumber } from "class-validator";
import { Articulo } from "src/articulo/entities/articulo.entity";

export class CreateArticuloDatumDto {
    @IsMongoId()
    @IsNotEmpty()
    articulo:String;
    @IsNotEmpty()
    @IsNumber()
    cantidad:number;
}
