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
import { CreateAlmacenDto } from './dto/create-almacen.dto';
import { UpdateAlmacenDto } from './dto/update-almacen.dto';
import { Almacen } from './entities/almacen.entity';
import { Model } from 'mongoose';
import { ArticuloDataService } from 'src/articulo-data/articulo-data.service';
export declare class AlmacenService {
    private almacenModel;
    private readonly articuloDataService;
    constructor(almacenModel: Model<Almacen>, articuloDataService: ArticuloDataService);
    create(createAlmacenDto: CreateAlmacenDto): Promise<import("mongoose").Document<unknown, {}, Almacen> & Almacen & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Almacen> & Almacen & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    ingresar(id: string, updateAlmacenDto: UpdateAlmacenDto): Promise<import("mongoose").Document<unknown, {}, Almacen> & Almacen & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    salida(id: string, updateAlmacenDto: UpdateAlmacenDto): Promise<import("mongoose").Document<unknown, {}, Almacen> & Almacen & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
