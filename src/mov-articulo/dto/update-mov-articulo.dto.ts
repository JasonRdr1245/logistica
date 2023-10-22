import { PartialType } from '@nestjs/mapped-types';
import { CreateMovArticuloDto } from './create-mov-articulo.dto';

export class UpdateMovArticuloDto extends PartialType(CreateMovArticuloDto) {}
