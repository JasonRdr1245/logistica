import mongoose from "mongoose";
import { ArticuloDatum } from "src/articulo-data/entities/articulo-datum.entity";
export declare class Almacen {
    descripcion: String;
    direccion: String;
    telefono: String;
    articulos: ArticuloDatum[];
}
export declare const AlmacenSchema: mongoose.Schema<Almacen, mongoose.Model<Almacen, any, any, any, mongoose.Document<unknown, any, Almacen> & Almacen & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Almacen, mongoose.Document<unknown, {}, mongoose.FlatRecord<Almacen>> & mongoose.FlatRecord<Almacen> & {
    _id: mongoose.Types.ObjectId;
}>;
