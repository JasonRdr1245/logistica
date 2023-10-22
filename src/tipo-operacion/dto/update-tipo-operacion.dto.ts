import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoOperacionDto } from './create-tipo-operacion.dto';

export class UpdateTipoOperacionDto extends PartialType(CreateTipoOperacionDto) {}
