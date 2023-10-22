import { PartialType } from '@nestjs/mapped-types';
import { CreateArticuloDatumDto } from './create-articulo-datum.dto';

export class UpdateArticuloDatumDto extends PartialType(CreateArticuloDatumDto) {}
