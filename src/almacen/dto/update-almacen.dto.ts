import { PartialType } from '@nestjs/mapped-types';
import { CreateAlmacenDto } from './create-almacen.dto';
import { ArticuloDatum } from 'src/articulo-data/entities/articulo-datum.entity';
import { IsMongoId, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateAlmacenDto {
    @IsMongoId()
    @IsNotEmpty()
    articuloId: string;
    @IsNumber()
    @IsNotEmpty()
    cantidad:number;
}

