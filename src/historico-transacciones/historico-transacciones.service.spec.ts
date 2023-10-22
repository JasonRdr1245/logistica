import { Test, TestingModule } from '@nestjs/testing';
import { HistoricoTransaccionesService } from './historico-transacciones.service';

describe('HistoricoTransaccionesService', () => {
  let service: HistoricoTransaccionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HistoricoTransaccionesService],
    }).compile();

    service = module.get<HistoricoTransaccionesService>(HistoricoTransaccionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
