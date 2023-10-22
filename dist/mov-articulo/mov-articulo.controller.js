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
exports.MovArticuloController = void 0;
const common_1 = require("@nestjs/common");
const mov_articulo_service_1 = require("./mov-articulo.service");
const create_mov_articulo_dto_1 = require("./dto/create-mov-articulo.dto");
const update_mov_articulo_dto_1 = require("./dto/update-mov-articulo.dto");
let MovArticuloController = class MovArticuloController {
    constructor(movArticuloService) {
        this.movArticuloService = movArticuloService;
    }
    create(tipoOperacion, createMovArticuloDto) {
        return this.movArticuloService.create(createMovArticuloDto, tipoOperacion);
    }
    findAll() {
        return this.movArticuloService.findAll();
    }
    findOne(id) {
        return this.movArticuloService.findOne(+id);
    }
    update(id, updateMovArticuloDto) {
        return this.movArticuloService.update(+id, updateMovArticuloDto);
    }
    remove(id) {
        return this.movArticuloService.remove(+id);
    }
};
exports.MovArticuloController = MovArticuloController;
__decorate([
    (0, common_1.Post)(':tipoOperacion'),
    __param(0, (0, common_1.Param)('tipoOperacion')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_mov_articulo_dto_1.CreateMovArticuloDto]),
    __metadata("design:returntype", void 0)
], MovArticuloController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MovArticuloController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MovArticuloController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_mov_articulo_dto_1.UpdateMovArticuloDto]),
    __metadata("design:returntype", void 0)
], MovArticuloController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MovArticuloController.prototype, "remove", null);
exports.MovArticuloController = MovArticuloController = __decorate([
    (0, common_1.Controller)('mov-articulo'),
    __metadata("design:paramtypes", [mov_articulo_service_1.MovArticuloService])
], MovArticuloController);
//# sourceMappingURL=mov-articulo.controller.js.map