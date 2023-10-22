import { Test, TestingModule } from '@nestjs/testing';
import { HistoricoTransaccionesController } from './historico-transacciones.controller';
import { HistoricoTransaccionesService } from './historico-transacciones.service';

describe('HistoricoTransaccionesController', () => {
  let controller: HistoricoTransaccionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistoricoTransaccionesController],
      providers: [HistoricoTransaccionesService],
    }).compile();

    controller = module.get<HistoricoTransaccionesController>(HistoricoTransaccionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
