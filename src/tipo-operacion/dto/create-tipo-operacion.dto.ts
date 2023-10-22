import { IsString } from "class-validator";

export class CreateTipoOperacionDto {
    @IsString()
    tipoMov:String;
    @IsString()
    descripcionMov:String;
}
