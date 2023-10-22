import { PartialType } from '@nestjs/mapped-types';
import { CreateHistoricoTransaccioneDto } from './create-historico-transaccione.dto';

export class UpdateHistoricoTransaccioneDto extends PartialType(CreateHistoricoTransaccioneDto) {}
