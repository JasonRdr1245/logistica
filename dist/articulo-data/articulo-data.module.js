"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticuloDataModule = void 0;
const common_1 = require("@nestjs/common");
const articulo_data_service_1 = require("./articulo-data.service");
const articulo_data_controller_1 = require("./articulo-data.controller");
const mongoose_1 = require("@nestjs/mongoose");
const articulo_datum_entity_1 = require("./entities/articulo-datum.entity");
const articulo_entity_1 = require("../articulo/entities/articulo.entity");
let ArticuloDataModule = class ArticuloDataModule {
};
exports.ArticuloDataModule = ArticuloDataModule;
exports.ArticuloDataModule = ArticuloDataModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: articulo_entity_1.Articulo.name, schema: articulo_entity_1.ArticuloSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: articulo_datum_entity_1.ArticuloDatum.name, schema: articulo_datum_entity_1.ArticuloDatumSchema }]),
        ],
        controllers: [articulo_data_controller_1.ArticuloDataController],
        providers: [articulo_data_service_1.ArticuloDataService],
        exports: [articulo_data_service_1.ArticuloDataService]
    })
], ArticuloDataModule);
//# sourceMappingURL=articulo-data.module.js.map