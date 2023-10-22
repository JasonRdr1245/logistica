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
import { ArticuloDataService } from './articulo-data.service';
import { CreateArticuloDatumDto } from './dto/create-articulo-datum.dto';
import { UpdateArticuloDatumDto } from './dto/update-articulo-datum.dto';
export declare class ArticuloDataController {
    private readonly articuloDataService;
    constructor(articuloDataService: ArticuloDataService);
    create(createArticuloDatumDto: CreateArticuloDatumDto): Promise<import("./entities/articulo-datum.entity").ArticuloDatum>;
    findAll(): Promise<Omit<import("mongoose").Document<unknown, {}, import("./entities/articulo-datum.entity").ArticuloDatum> & import("./entities/articulo-datum.entity").ArticuloDatum & Required<{
        _id: string;
    }>, never>[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./entities/articulo-datum.entity").ArticuloDatum> & import("./entities/articulo-datum.entity").ArticuloDatum & Required<{
        _id: string;
    }>>;
    update(id: string, updateArticuloDatumDto: UpdateArticuloDatumDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/articulo-datum.entity").ArticuloDatum> & import("./entities/articulo-datum.entity").ArticuloDatum & Required<{
        _id: string;
    }>>;
    remove(id: string): string;
}
