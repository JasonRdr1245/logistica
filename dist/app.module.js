"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const articulo_module_1 = require("./articulo/articulo.module");
const mov_articulo_module_1 = require("./mov-articulo/mov-articulo.module");
const tipo_operacion_module_1 = require("./tipo-operacion/tipo-operacion.module");
const historico_transacciones_module_1 = require("./historico-transacciones/historico-transacciones.module");
const almacen_module_1 = require("./almacen/almacen.module");
const articulo_data_module_1 = require("./articulo-data/articulo-data.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forRoot('mongodb+srv://admin:9ij7YboUymy9ymmb@inventarysystem.qleugcs.mongodb.net/'),
            articulo_module_1.ArticuloModule,
            mov_articulo_module_1.MovArticuloModule,
            tipo_operacion_module_1.TipoOperacionModule,
            historico_transacciones_module_1.HistoricoTransaccionesModule,
            almacen_module_1.AlmacenModule,
            articulo_data_module_1.ArticuloDataModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map