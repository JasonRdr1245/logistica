import mongoose from "mongoose";
import { Almacen } from "src/almacen/entities/almacen.entity";
import { Articulo } from "src/articulo/entities/articulo.entity";
import { TipoOperacion } from "src/tipo-operacion/entities/tipo-operacion.entity";
export declare class MovArticulo {
    fecha: Date;
    numeroDoc: String;
    cantidad: Number;
    indicadorEstado: String;
    articulo: Articulo;
    almacenOrigen?: Almacen;
    almacenDestino?: Almacen;
    tipoOperacion: TipoOperacion;
}
export declare const MovArticuloSchema: mongoose.Schema<MovArticulo, mongoose.Model<MovArticulo, any, any, any, mongoose.Document<unknown, any, MovArticulo> & MovArticulo & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, MovArticulo, mongoose.Document<unknown, {}, mongoose.FlatRecord<MovArticulo>> & mongoose.FlatRecord<MovArticulo> & {
    _id: mongoose.Types.ObjectId;
}>;
