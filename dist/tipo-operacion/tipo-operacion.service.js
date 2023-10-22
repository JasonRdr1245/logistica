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
exports.TipoOperacionService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const tipo_operacion_entity_1 = require("./entities/tipo-operacion.entity");
const mongoose_2 = require("mongoose");
let TipoOperacionService = class TipoOperacionService {
    constructor(tipoOperacionModel) {
        this.tipoOperacionModel = tipoOperacionModel;
    }
    async create(createTipoOperacionDto) {
        try {
            const newTipoOperacion = new this.tipoOperacionModel(createTipoOperacionDto);
            return await newTipoOperacion.save();
        }
        catch (error) {
            throw new common_1.BadRequestException('Algun error en el envio de datos');
        }
    }
    async findAll() {
        return await this.tipoOperacionModel.find();
    }
    findOne(id) {
        return `This action returns a #${id} tipoOperacion`;
    }
    update(id, updateTipoOperacionDto) {
        return `This action updates a #${id} tipoOperacion`;
    }
    remove(id) {
        return `This action removes a #${id} tipoOperacion`;
    }
};
exports.TipoOperacionService = TipoOperacionService;
exports.TipoOperacionService = TipoOperacionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(tipo_operacion_entity_1.TipoOperacion.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TipoOperacionService);
//# sourceMappingURL=tipo-operacion.service.js.map