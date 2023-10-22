import { CreateHistoricoTransaccioneDto } from './dto/create-historico-transaccione.dto';
import { UpdateHistoricoTransaccioneDto } from './dto/update-historico-transaccione.dto';
export declare class HistoricoTransaccionesService {
    create(createHistoricoTransaccioneDto: CreateHistoricoTransaccioneDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateHistoricoTransaccioneDto: UpdateHistoricoTransaccioneDto): string;
    remove(id: number): string;
}
