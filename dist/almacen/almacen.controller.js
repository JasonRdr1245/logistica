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
exports.AlmacenController = void 0;
const common_1 = require("@nestjs/common");
const almacen_service_1 = require("./almacen.service");
const create_almacen_dto_1 = require("./dto/create-almacen.dto");
const update_almacen_dto_1 = require("./dto/update-almacen.dto");
let AlmacenController = class AlmacenController {
    constructor(almacenService) {
        this.almacenService = almacenService;
    }
    create(createAlmacenDto) {
        return this.almacenService.create(createAlmacenDto);
    }
    findAll() {
        return this.almacenService.findAll();
    }
    agregarArticulo(id, UpdateAlmacenDto) {
        return this.almacenService.ingresar(id, UpdateAlmacenDto);
    }
    salidaArticulo(id, updateAlmacenDto) {
        return this.almacenService.salida(id, updateAlmacenDto);
    }
};
exports.AlmacenController = AlmacenController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_almacen_dto_1.CreateAlmacenDto]),
    __metadata("design:returntype", void 0)
], AlmacenController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AlmacenController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)('ingresar/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_almacen_dto_1.UpdateAlmacenDto]),
    __metadata("design:returntype", void 0)
], AlmacenController.prototype, "agregarArticulo", null);
__decorate([
    (0, common_1.Patch)('salida/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_almacen_dto_1.UpdateAlmacenDto]),
    __metadata("design:returntype", void 0)
], AlmacenController.prototype, "salidaArticulo", null);
exports.AlmacenController = AlmacenController = __decorate([
    (0, common_1.Controller)('almacen'),
    __metadata("design:paramtypes", [almacen_service_1.AlmacenService])
], AlmacenController);
//# sourceMappingURL=almacen.controller.js.map