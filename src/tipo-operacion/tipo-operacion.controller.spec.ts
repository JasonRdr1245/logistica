import { Test, TestingModule } from '@nestjs/testing';
import { TipoOperacionController } from './tipo-operacion.controller';
import { TipoOperacionService } from './tipo-operacion.service';

describe('TipoOperacionController', () => {
  let controller: TipoOperacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoOperacionController],
      providers: [TipoOperacionService],
    }).compile();

    controller = module.get<TipoOperacionController>(TipoOperacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
