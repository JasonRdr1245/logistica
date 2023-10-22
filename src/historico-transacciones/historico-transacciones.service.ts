import { Injectable } from '@nestjs/common';
import { CreateHistoricoTransaccioneDto } from './dto/create-historico-transaccione.dto';
import { UpdateHistoricoTransaccioneDto } from './dto/update-historico-transaccione.dto';

@Injectable()
export class HistoricoTransaccionesService {
  create(createHistoricoTransaccioneDto: CreateHistoricoTransaccioneDto) {
    return 'This action adds a new historicoTransaccione';
  }

  findAll() {
    return `This action returns all historicoTransacciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} historicoTransaccione`;
  }

  update(id: number, updateHistoricoTransaccioneDto: UpdateHistoricoTransaccioneDto) {
    return `This action updates a #${id} historicoTransaccione`;
  }

  remove(id: number) {
    return `This action removes a #${id} historicoTransaccione`;
  }
}
