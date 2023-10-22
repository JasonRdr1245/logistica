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
import { TipoOperacionService } from './tipo-operacion.service';
import { CreateTipoOperacionDto } from './dto/create-tipo-operacion.dto';
import { UpdateTipoOperacionDto } from './dto/update-tipo-operacion.dto';
export declare class TipoOperacionController {
    private readonly tipoOperacionService;
    constructor(tipoOperacionService: TipoOperacionService);
    create(createTipoOperacionDto: CreateTipoOperacionDto): Promise<import("./entities/tipo-operacion.entity").TipoOperacion>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./entities/tipo-operacion.entity").TipoOperacion> & import("./entities/tipo-operacion.entity").TipoOperacion & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: string): string;
    update(id: string, updateTipoOperacionDto: UpdateTipoOperacionDto): string;
    remove(id: string): string;
}
