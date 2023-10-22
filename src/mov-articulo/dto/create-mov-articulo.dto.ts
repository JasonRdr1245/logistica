import { IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMovArticuloDto {
  @IsString()
  @IsNotEmpty()
  numeroDoc: string;
  @IsNumber()
  @IsNotEmpty()
  cantidad: number;
  @IsString()
  @IsNotEmpty()
  indicadorEstado: string;
  @IsString()
  @IsNotEmpty()
  @IsMongoId()
  articulo: string;
  @IsString()
  @IsOptional()
  @IsMongoId()
  almacenOrigen: string;
  @IsString()
  @IsOptional()
  @IsMongoId()
  almacenDestino: string;
}
