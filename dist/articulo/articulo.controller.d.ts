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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { ArticuloService } from './articulo.service';
import { CreateArticuloDto } from './dto/create-articulo.dto';
import { UpdateArticuloDto } from './dto/update-articulo.dto';
export declare class ArticuloController {
    private readonly articuloService;
    constructor(articuloService: ArticuloService);
    create(createArticuloDto: CreateArticuloDto): Promise<import("./entities/articulo.entity").Articulo>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./entities/articulo.entity").Articulo> & import("./entities/articulo.entity").Articulo & Required<{
        _id: string;
    }>)[]>;
    findOne(id: string): string;
    update(id: string, updateArticuloDto: UpdateArticuloDto): string;
    remove(id: string): string;
}
