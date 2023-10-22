import { IsNotEmpty, IsString } from 'class-validator';
import { ArticuloDatum } from 'src/articulo-data/entities/articulo-datum.entity';

export class CreateAlmacenDto {
  @IsNotEmpty()
  @IsString()
  descripcion: String;
  @IsNotEmpty()
  @IsString()
  direccion: String;
  @IsNotEmpty()
  @IsString()
  telefono: String;
}
