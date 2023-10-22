"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoOperacionModule = void 0;
const common_1 = require("@nestjs/common");
const tipo_operacion_service_1 = require("./tipo-operacion.service");
const tipo_operacion_controller_1 = require("./tipo-operacion.controller");
const mongoose_1 = require("@nestjs/mongoose");
const tipo_operacion_entity_1 = require("./entities/tipo-operacion.entity");
let TipoOperacionModule = class TipoOperacionModule {
};
exports.TipoOperacionModule = TipoOperacionModule;
exports.TipoOperacionModule = TipoOperacionModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: tipo_operacion_entity_1.TipoOperacion.name, schema: tipo_operacion_entity_1.TipoOperacionSchema }])],
        controllers: [tipo_operacion_controller_1.TipoOperacionController],
        providers: [tipo_operacion_service_1.TipoOperacionService],
    })
], TipoOperacionModule);
//# sourceMappingURL=tipo-operacion.module.js.map