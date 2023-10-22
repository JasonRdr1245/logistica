import { Test, TestingModule } from '@nestjs/testing';
import { MovArticuloService } from './mov-articulo.service';

describe('MovArticuloService', () => {
  let service: MovArticuloService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovArticuloService],
    }).compile();

    service = module.get<MovArticuloService>(MovArticuloService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
