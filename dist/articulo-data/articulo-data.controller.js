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
exports.ArticuloDataController = void 0;
const common_1 = require("@nestjs/common");
const articulo_data_service_1 = require("./articulo-data.service");
const create_articulo_datum_dto_1 = require("./dto/create-articulo-datum.dto");
const update_articulo_datum_dto_1 = require("./dto/update-articulo-datum.dto");
let ArticuloDataController = class ArticuloDataController {
    constructor(articuloDataService) {
        this.articuloDataService = articuloDataService;
    }
    create(createArticuloDatumDto) {
        return this.articuloDataService.create(createArticuloDatumDto);
    }
    findAll() {
        return this.articuloDataService.findAll();
    }
    findOne(id) {
        return this.articuloDataService.findOne(id);
    }
    update(id, updateArticuloDatumDto) {
        return this.articuloDataService.update(id, updateArticuloDatumDto);
    }
    remove(id) {
        return this.articuloDataService.remove(+id);
    }
};
exports.ArticuloDataController = ArticuloDataController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_articulo_datum_dto_1.CreateArticuloDatumDto]),
    __metadata("design:returntype", void 0)
], ArticuloDataController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ArticuloDataController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ArticuloDataController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_articulo_datum_dto_1.UpdateArticuloDatumDto]),
    __metadata("design:returntype", void 0)
], ArticuloDataController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ArticuloDataController.prototype, "remove", null);
exports.ArticuloDataController = ArticuloDataController = __decorate([
    (0, common_1.Controller)('articulo-data'),
    __metadata("design:paramtypes", [articulo_data_service_1.ArticuloDataService])
], ArticuloDataController);
//# sourceMappingURL=articulo-data.controller.js.map