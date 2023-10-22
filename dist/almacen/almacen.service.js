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
exports.AlmacenService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const almacen_entity_1 = require("./entities/almacen.entity");
const mongoose_2 = require("mongoose");
const articulo_data_service_1 = require("../articulo-data/articulo-data.service");
let AlmacenService = class AlmacenService {
    constructor(almacenModel, articuloDataService) {
        this.almacenModel = almacenModel;
        this.articuloDataService = articuloDataService;
    }
    async create(createAlmacenDto) {
        const articulos = [];
        const newAlmacen = new this.almacenModel(createAlmacenDto, articulos);
        return await newAlmacen.save();
    }
    async findAll() {
        return await this.almacenModel.find();
    }
    async ingresar(id, updateAlmacenDto) {
        try {
            const almacenAct = await this.almacenModel.findById(id);
            if (!almacenAct) {
                throw new common_1.BadRequestException('el almacen no existe');
            }
            const { articulos, ...obejct } = almacenAct;
            for (const articuloDat of articulos) {
                const articuloData = await this.articuloDataService.findOne(articuloDat._id);
                if (articuloData.articulo._id == updateAlmacenDto.articuloId) {
                    const cantidad = articuloData.cantidad + updateAlmacenDto.cantidad;
                    const Updatearti = {
                        cantidad,
                    };
                    const artDataActualizado = await this.articuloDataService.update(articuloData._id, Updatearti);
                    return await this.almacenModel
                        .findById(id)
                        .populate('articulos')
                        .exec();
                }
            }
            const articulo = updateAlmacenDto.articuloId;
            const createArticuloDtumDto = {
                articulo,
                cantidad: updateAlmacenDto.cantidad,
            };
            const newArticuloData = await this.articuloDataService.create(createArticuloDtumDto);
            almacenAct.articulos.push(newArticuloData);
            return await almacenAct.save();
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async salida(id, updateAlmacenDto) {
        try {
            const almacenAct = await this.almacenModel.findById(id);
            if (!almacenAct) {
                throw new common_1.BadRequestException('El almacén no existe');
            }
            const { articulos, ...object } = almacenAct;
            for (const articuloDat of articulos) {
                const articuloData = await this.articuloDataService.findOne(articuloDat._id);
                if (articuloData.articulo._id == updateAlmacenDto.articuloId) {
                    if (articuloData.cantidad >= updateAlmacenDto.cantidad) {
                        const cantidad = articuloData.cantidad - updateAlmacenDto.cantidad;
                        const updateArticuloDataDto = {
                            cantidad,
                        };
                        const updatedArticuloData = await this.articuloDataService.update(articuloData._id, updateArticuloDataDto);
                        almacenAct.articulos = articulos;
                        return await this.almacenModel
                            .findById(id)
                            .populate('articulos')
                            .exec();
                    }
                    else {
                        throw new common_1.BadRequestException('Cantidad insuficiente en el almacén para la salida');
                    }
                }
            }
            throw new common_1.BadRequestException('El artículo no existe en el almacén');
        }
        catch (error) {
            throw new common_1.BadRequestException('Revise los datos que desea enviar');
        }
    }
};
exports.AlmacenService = AlmacenService;
exports.AlmacenService = AlmacenService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(almacen_entity_1.Almacen.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        articulo_data_service_1.ArticuloDataService])
], AlmacenService);
//# sourceMappingURL=almacen.service.js.map