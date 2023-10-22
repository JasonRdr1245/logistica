import mongoose from "mongoose";
import { MovArticulo } from "src/mov-articulo/entities/mov-articulo.entity";
export declare class HistoricoTransacciones {
    movArticulo: MovArticulo;
}
export declare const HistoricoTransaccionesSchema: mongoose.Schema<HistoricoTransacciones, mongoose.Model<HistoricoTransacciones, any, any, any, mongoose.Document<unknown, any, HistoricoTransacciones> & HistoricoTransacciones & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, HistoricoTransacciones, mongoose.Document<unknown, {}, mongoose.FlatRecord<HistoricoTransacciones>> & mongoose.FlatRecord<HistoricoTransacciones> & {
    _id: mongoose.Types.ObjectId;
}>;
