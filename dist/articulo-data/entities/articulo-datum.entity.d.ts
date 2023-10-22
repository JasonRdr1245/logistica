import mongoose from "mongoose";
import { Articulo } from "src/articulo/entities/articulo.entity";
export declare class ArticuloDatum {
    _id?: string;
    cantidad: number;
    articulo: Articulo;
}
export declare const ArticuloDatumSchema: mongoose.Schema<ArticuloDatum, mongoose.Model<ArticuloDatum, any, any, any, mongoose.Document<unknown, any, ArticuloDatum> & ArticuloDatum & Required<{
    _id: string;
}>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ArticuloDatum, mongoose.Document<unknown, {}, mongoose.FlatRecord<ArticuloDatum>> & mongoose.FlatRecord<ArticuloDatum> & Required<{
    _id: string;
}>>;
