"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticuloModule = void 0;
const common_1 = require("@nestjs/common");
const articulo_service_1 = require("./articulo.service");
const articulo_controller_1 = require("./articulo.controller");
const mongoose_1 = require("@nestjs/mongoose");
const articulo_entity_1 = require("./entities/articulo.entity");
let ArticuloModule = class ArticuloModule {
};
exports.ArticuloModule = ArticuloModule;
exports.ArticuloModule = ArticuloModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: articulo_entity_1.Articulo.name, schema: articulo_entity_1.ArticuloSchema }])],
        controllers: [articulo_controller_1.ArticuloController],
        providers: [articulo_service_1.ArticuloService],
        exports: [articulo_service_1.ArticuloService]
    })
], ArticuloModule);
//# sourceMappingURL=articulo.module.js.map