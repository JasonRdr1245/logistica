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
exports.MovArticuloService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mov_articulo_entity_1 = require("./entities/mov-articulo.entity");
const mongoose_2 = require("mongoose");
const almacen_service_1 = require("../almacen/almacen.service");
let MovArticuloService = class MovArticuloService {
    constructor(MovArticuloModel, almacenService) {
        this.MovArticuloModel = MovArticuloModel;
        this.almacenService = almacenService;
    }
    async create(createMovArticuloDto, tipoOperacion) {
        try {
            let tipoOperacionObject;
            if (tipoOperacion == 'ingreso') {
                tipoOperacionObject = '6534c1c7df4e695a7b32b7f7';
                const updateAlmacen = {
                    articuloId: createMovArticuloDto.articulo,
                    cantidad: createMovArticuloDto.cantidad,
                };
                await this.almacenService.ingresar(createMovArticuloDto.almacenDestino, updateAlmacen);
            }
            else if (tipoOperacion == 'salida') {
                tipoOperacionObject = '6534c1e5df4e695a7b32b7f9';
                const updateAlmacen = {
                    articuloId: createMovArticuloDto.articulo,
                    cantidad: createMovArticuloDto.cantidad,
                };
                await this.almacenService.salida(createMovArticuloDto.almacenOrigen, updateAlmacen);
            }
            else if (tipoOperacion == 'intra-almacenes') {
                tipoOperacionObject = '6534c1f6df4e695a7b32b7fb';
                const updateAlmacen = {
                    articuloId: createMovArticuloDto.articulo,
                    cantidad: createMovArticuloDto.cantidad,
                };
                await Promise.all([
                    this.almacenService.ingresar(createMovArticuloDto.almacenDestino, updateAlmacen),
                    this.almacenService.salida(createMovArticuloDto.almacenOrigen, updateAlmacen),
                ]);
            }
            else {
                throw new common_1.BadRequestException('no existe esa operacion');
            }
            const fecha = new Date();
            const newMovimiento = new this.MovArticuloModel({
                ...createMovArticuloDto,
                tipoOperacion: tipoOperacionObject,
                fecha,
            });
            const savedMovimiento = await newMovimiento.save();
            const populatedMov = await this.MovArticuloModel.findById(savedMovimiento._id)
                .populate('articulo')
                .populate({ path: 'almacenOrigen', populate: { path: 'articulos', populate: { path: 'articulo' } } })
                .populate({ path: 'almacenDestino', populate: { path: 'articulos', populate: { path: 'articulo' } } })
                .populate('tipoOperacion')
                .exec();
            return populatedMov;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    findAll() {
        return `This action returns all movArticulo`;
    }
    findOne(id) {
        return `This action returns a #${id} movArticulo`;
    }
    update(id, updateMovArticuloDto) {
        return `This action updates a #${id} movArticulo`;
    }
    remove(id) {
        return `This action removes a #${id} movArticulo`;
    }
};
exports.MovArticuloService = MovArticuloService;
exports.MovArticuloService = MovArticuloService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(mov_articulo_entity_1.MovArticulo.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        almacen_service_1.AlmacenService])
], MovArticuloService);
//# sourceMappingURL=mov-articulo.service.js.map