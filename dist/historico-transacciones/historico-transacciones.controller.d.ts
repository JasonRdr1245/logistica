import { HistoricoTransaccionesService } from './historico-transacciones.service';
import { CreateHistoricoTransaccioneDto } from './dto/create-historico-transaccione.dto';
import { UpdateHistoricoTransaccioneDto } from './dto/update-historico-transaccione.dto';
export declare class HistoricoTransaccionesController {
    private readonly historicoTransaccionesService;
    constructor(historicoTransaccionesService: HistoricoTransaccionesService);
    create(createHistoricoTransaccioneDto: CreateHistoricoTransaccioneDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateHistoricoTransaccioneDto: UpdateHistoricoTransaccioneDto): string;
    remove(id: string): string;
}
