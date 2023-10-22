"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoOperacionController = void 0;
const common_1 = require("@nestjs/common");
const tipo_operacion_service_1 = require("./tipo-operacion.service");
const create_tipo_operacion_dto_1 = require("./dto/create-tipo-operacion.dto");
const update_tipo_operacion_dto_1 = require("./dto/update-tipo-operacion.dto");
let TipoOperacionController = class TipoOperacionController {
    constructor(tipoOperacionService) {
        this.tipoOperacionService = tipoOperacionService;
    }
    create(createTipoOperacionDto) {
        return this.tipoOperacionService.create(createTipoOperacionDto);
    }
    findAll() {
        return this.tipoOperacionService.findAll();
    }
    findOne(id) {
        return this.tipoOperacionService.findOne(+id);
    }
    update(id, updateTipoOperacionDto) {
        return this.tipoOperacionService.update(+id, updateTipoOperacionDto);
    }
    remove(id) {
        return this.tipoOperacionService.remove(+id);
    }
};
exports.TipoOperacionController = TipoOperacionController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tipo_operacion_dto_1.CreateTipoOperacionDto]),
    __metadata("design:returntype", void 0)
], TipoOperacionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TipoOperacionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TipoOperacionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tipo_operacion_dto_1.UpdateTipoOperacionDto]),
    __metadata("design:returntype", void 0)
], TipoOperacionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TipoOperacionController.prototype, "remove", null);
exports.TipoOperacionController = TipoOperacionController = __decorate([
    (0, common_1.Controller)('tipo-operacion'),
    __metadata("design:paramtypes", [tipo_operacion_service_1.TipoOperacionService])
], TipoOperacionController);
//# sourceMappingURL=tipo-operacion.controller.js.map