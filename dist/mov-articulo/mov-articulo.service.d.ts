/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { CreateMovArticuloDto } from './dto/create-mov-articulo.dto';
import { UpdateMovArticuloDto } from './dto/update-mov-articulo.dto';
import { MovArticulo } from './entities/mov-articulo.entity';
import { Model } from 'mongoose';
import { AlmacenService } from 'src/almacen/almacen.service';
export declare class MovArticuloService {
    private MovArticuloModel;
    private readonly almacenService;
    constructor(MovArticuloModel: Model<MovArticulo>, almacenService: AlmacenService);
    create(createMovArticuloDto: CreateMovArticuloDto, tipoOperacion: string): Promise<import("mongoose").Document<unknown, {}, MovArticulo> & MovArticulo & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateMovArticuloDto: UpdateMovArticuloDto): string;
    remove(id: number): string;
}
