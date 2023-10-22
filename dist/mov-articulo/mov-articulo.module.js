"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovArticuloModule = void 0;
const common_1 = require("@nestjs/common");
const mov_articulo_service_1 = require("./mov-articulo.service");
const mov_articulo_controller_1 = require("./mov-articulo.controller");
const mongoose_1 = require("@nestjs/mongoose");
const mov_articulo_entity_1 = require("./entities/mov-articulo.entity");
const almacen_module_1 = require("../almacen/almacen.module");
let MovArticuloModule = class MovArticuloModule {
};
exports.MovArticuloModule = MovArticuloModule;
exports.MovArticuloModule = MovArticuloModule = __decorate([
    (0, common_1.Module)({
        imports: [
            almacen_module_1.AlmacenModule,
            mongoose_1.MongooseModule.forFeature([
                { name: mov_articulo_entity_1.MovArticulo.name, schema: mov_articulo_entity_1.MovArticuloSchema },
            ]),
        ],
        controllers: [mov_articulo_controller_1.MovArticuloController],
        providers: [mov_articulo_service_1.MovArticuloService],
    })
], MovArticuloModule);
//# sourceMappingURL=mov-articulo.module.js.map