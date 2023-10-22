"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoricoTransaccionesModule = void 0;
const common_1 = require("@nestjs/common");
const historico_transacciones_service_1 = require("./historico-transacciones.service");
const historico_transacciones_controller_1 = require("./historico-transacciones.controller");
const mongoose_1 = require("@nestjs/mongoose");
const historico_transaccione_entity_1 = require("./entities/historico-transaccione.entity");
let HistoricoTransaccionesModule = class HistoricoTransaccionesModule {
};
exports.HistoricoTransaccionesModule = HistoricoTransaccionesModule;
exports.HistoricoTransaccionesModule = HistoricoTransaccionesModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: historico_transaccione_entity_1.HistoricoTransacciones.name, schema: historico_transaccione_entity_1.HistoricoTransaccionesSchema }])],
        controllers: [historico_transacciones_controller_1.HistoricoTransaccionesController],
        providers: [historico_transacciones_service_1.HistoricoTransaccionesService],
    })
], HistoricoTransaccionesModule);
//# sourceMappingURL=historico-transacciones.module.js.map