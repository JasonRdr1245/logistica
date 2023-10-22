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
exports.ArticuloDataService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const articulo_datum_entity_1 = require("./entities/articulo-datum.entity");
const mongoose_2 = require("mongoose");
const articulo_entity_1 = require("../articulo/entities/articulo.entity");
let ArticuloDataService = class ArticuloDataService {
    constructor(articuloDatumModel, articuloModel) {
        this.articuloDatumModel = articuloDatumModel;
        this.articuloModel = articuloModel;
    }
    async create(createArticuloDatumDto) {
        try {
            const { articulo, ...object } = createArticuloDatumDto;
            const actuallyArticle = await this.articuloModel.findById(articulo);
            if (!actuallyArticle) {
                throw new common_1.BadRequestException('el id no es encontrado');
            }
            const newAriticleData = new this.articuloDatumModel(createArticuloDatumDto);
            return newAriticleData.save();
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async findAll() {
        try {
            const articulosData = await this.articuloDatumModel
                .find()
                .populate('articulo')
                .exec();
            return articulosData;
        }
        catch (error) {
            throw new Error('Error al obtener los datos de los artículos');
        }
    }
    async findOne(id) {
        try {
            return await this.articuloDatumModel.findById(id);
        }
        catch (error) {
            throw new Error('no hay esa id');
        }
    }
    async update(id, updateArticuloDatumDto) {
        try {
            const updatedArticulo = await this.articuloDatumModel.findByIdAndUpdate(id, updateArticuloDatumDto, { new: true });
            if (!updatedArticulo) {
                throw new common_1.BadRequestException('El artículo no pudo ser actualizado');
            }
            return updatedArticulo;
        }
        catch (error) {
            throw new Error('Error al actualizar el artículo');
        }
    }
    remove(id) {
        return `This action removes a #${id} articuloDatum`;
    }
};
exports.ArticuloDataService = ArticuloDataService;
exports.ArticuloDataService = ArticuloDataService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(articulo_datum_entity_1.ArticuloDatum.name)),
    __param(1, (0, mongoose_1.InjectModel)(articulo_entity_1.Articulo.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], ArticuloDataService);
//# sourceMappingURL=articulo-data.service.js.map