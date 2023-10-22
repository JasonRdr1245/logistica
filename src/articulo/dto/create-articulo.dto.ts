import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateArticuloDto {
  @IsNotEmpty()
  @IsString()
  descripcion: String;
  @IsString()
  @IsNotEmpty()
  unidad: String;
  @IsNotEmpty()
  @IsString()
  saldoInicial: String;
  @IsOptional()
  @IsBoolean()
  isIgvArticle: Boolean;
  @IsNotEmpty()
  @IsNumber()
  precioVenta: Number;
  @IsNotEmpty()
  @IsNumber()
  puntoReorden: Number;
  @IsNotEmpty()
  @IsNumber()
  tasaEspecialIgv: Number;
}
